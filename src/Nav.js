import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Nav.css'
import logo from './assests/logo.png'
function Nav() {
    const [show, setShow] = useState(false)
    const history = useHistory()
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img src={logo} alt=""
                    className="nav__logo" />
                <img
                    onClick={() => history.push("/profile")}
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt=""
                    className="nav__avatar" />
            </div>
        </div>
    )
}

export default Nav
