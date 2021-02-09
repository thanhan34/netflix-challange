import React, { useState } from 'react'
import LoginRow from '../LoginRow'
import './LoginScreen.css'
import SignupScreen from './SignupScreen'
import logo from '../assests/logo.png'
import LoginRowReverse from '../LoginRowReverse'
function LoginScreen() {
    const [signIn, setSignIn] = useState(false)

    return (

        <div className="loginScreen">
            <div className="loginScreen__background">
                <img src={logo} alt="" className="loginScreen__logo" />
                <button className="loginScreen__button" onClick={() => setSignIn(true)}>Sign In</button>
                <div className="loginScreen__gradient" />
            </div>
            <div className="loginScreen__body">
                {
                    signIn ? (<SignupScreen />) : (

                        <>
                            <h1>Unlimited movies, TV shows and more.</h1>
                            <h2>Watch anywhere. Cancel at any time.</h2>
                            <h3>Ready to watch Netflix? Enter your email to create or restart your membership.</h3>
                            <div className="loginScreen__input">
                                <form>
                                    <input type="email" placeholder="Email Address" />
                                    <button className="loginScreen__getStarted" onClick={() => setSignIn(true)}>GET STARTED</button>
                                </form>
                            </div>

                        </>
                    )
                }
            </div>
            <div className="loginScreen__row">
                <LoginRow
                    title="Enjoy Netflix on your TV."
                    subtitle="Watch titles on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                    imgSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                    videoSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"

                />
                <LoginRowReverse />
                <LoginRow
                    title="Watch Netflix everywhere."
                    subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV without paying more."
                    imgSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                    videoSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"

                />
            </div>
        </div>
    )
}

export default LoginScreen
