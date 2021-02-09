import React from 'react'
import './LoginRowReverse.css'
function LoginRowReverse() {
    return (
        <div className="loginRowReverse">
            <div className="loginRowReverse__left">
                <h1>Download your shows to watch them offline.</h1>
                <h2>Save your favourites easily and always have something to watch.</h2>
            </div>
            <div className="loginRowReverse__right">
                <div className="loginRowReverse__container">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                    <div className="loginRowReverse__card">
                        <div className="loginRowReverse_imgContainer">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                        </div>
                        <div className="loginRowReverse__textContainer">
                            <div className="loginRowReverse__textHeader">Stranger Things</div>
                            <div className="loginRowReverse__textSubheader">Downloading...</div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="center-pixel" style={{ position: "absolute" }}></div>
        </div>
    )
}

export default LoginRowReverse
