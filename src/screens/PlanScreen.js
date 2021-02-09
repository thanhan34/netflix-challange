import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import db from '../firebase'
import './PlanScreen.css'
import { loadStripe } from "@stripe/stripe-js"
function PlanScreen() {
    const [products, setProducts] = useState([])
    const user = useSelector(selectUser)
    const [subscription, setSubscription] = useState(null)
    const API_KEY = "pk_test_51I8dQfJmlbP54cauBVInsqc1HS78XSS9w9Dz0ikDFwpmYq4lm6qIhvqW5lZRc8fwx2olftsXqByYQRKw899xEz4r00TrMVgxOd"
    useEffect(() => {
        db.collection("products").where("active", "==", true).get().then((querySnapshot) => {
            const products = {}
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data()
                const priceSnap = await productDoc.ref.collection('prices').get()
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceID: price.id,
                        priceData: price.data()
                    }
                })
            })
            setProducts(products)
        })
    }, [])
    useEffect(() => {
        db.collection("customers")
            .doc(user.uid)
            .collection("subscriptions")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach(async subscription => {
                    setSubscription({
                        role: subscription.data().role,
                        current_period_end: subscription.data().current_period_end.seconds,
                        current_period_start: subscription.data().current_period_start.seconds,
                    })
                })
            })

    }, [user.uid])
    console.log(subscription)
    console.log(products)
    const loadCheckout = async (priceId) => {
        const docRef = await db
            .collection("customers")
            .doc(user.uid)
            .collection("checkout_sessions")
            .add({
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin,
            })

        docRef.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data()
            if (error) {
                alert(`An error occured: ${error.message}`)
            }
            if (sessionId) {
                const stripe = await loadStripe(API_KEY)
                stripe.redirectToCheckout({ sessionId })
            }
        })
        // console.log(priceId)
    }
    return (
        <div className="plansScreen">
            <br />
            {subscription && <p>Renewal date: {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</p>}
            {Object.entries(products).map(([productId, productData]) => {
                const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role)
                return (
                    <div
                        key={productId}
                        className={`${isCurrentPackage && "plansScreen--disabled"} plansScreen__plan`}>
                        <div className="plansScreen__info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceID)}>{isCurrentPackage ? 'Current Package' : "Subscribe"}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default PlanScreen
