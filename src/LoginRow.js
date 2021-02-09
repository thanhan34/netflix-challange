import React from 'react'
import './LoginRow.css'
function LoginRow({ title, subtitle, imgSrc, videoSrc }) {
    return (
        <div className="loginRow">
            <div className="loginRow__left">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <div className="loginRow__right">
                <div className="loginRow__rightContainer">

                    <img src={imgSrc} alt="" />
                    <div className="loginRow__videoContainer">
                        <video autoPlay playsInline muted loop src={videoSrc}></video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginRow
