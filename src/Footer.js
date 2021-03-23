import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__site">
                    <p className="footer__top">Question? Phone <a className="footer__topA" href="tel:1800 875 462">1800 875 462</a></p>
                    <ul className="footer__links">
                        <li className="footer__linkItem">FAQ</li>
                        <li className="footer__linkItem">Help Centre</li>
                        <li className="footer__linkItem">Account</li>
                        <li className="footer__linkItem">Media Centre</li>
                        <li className="footer__linkItem">Investor relations</li>
                        <li className="footer__linkItem">Jobs</li>
                        <li className="footer__linkItem">Redeem gift cards</li>
                        <li className="footer__linkItem">Buy gift cards</li>
                        <li className="footer__linkItem">Ways to watch</li>
                        <li className="footer__linkItem">Term of Use</li>
                        <li className="footer__linkItem">Privacy</li>
                        <li className="footer__linkItem">Cookie preferences</li>
                        <li className="footer__linkItem">Corporate information</li>
                        <li className="footer__linkItem">Contact us</li>
                        <li className="footer__linkItem">Speed test</li>
                        <li className="footer__linkItem">Legal notices</li>
                        <li className="footer__linkItem">Netflix Originals</li>
                    </ul>
                    <p className="footer__country">Netflix Australia</p>
                </div >
            </div >
        </div >
    )
}

export default Footer
