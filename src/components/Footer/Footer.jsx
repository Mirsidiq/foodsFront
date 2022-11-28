import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import footerLogo from "../../assets/images/footer-logo.png"
import facebook from "../../assets/images/facebook.svg"
import twitter from "../../assets/images/twitter.svg"
import instagram from "../../assets/images/instagram.svg"
import "./footer.scss"
export default function Footer() {
  return (
    <footer>
        <div className="footer-top">
            <div className="container footer__container">
                <div className="footer-top__info">
                <span className='footer__suptitle'>Newsletter</span>
                <h3 className="footer__title">Subscribe to Our Newsletter</h3>
                <span className="footer__subtitle">And never miss latest Updates!</span>
                </div>
                <div className="footer__email">
                    <Input id='footer__input' placeholder='email addres'/>
                    <Button id='footer__send-btn'>Subscribe</Button>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container footer-bottom__container">
            <div className="footer-contact">
                <h4 className='footer-contact__title'>Contact Us</h4>
                <p className='footer-contact__addres'>9 W 53rd St, London, NY 10019, UK</p>
                <p className='footer-contact__addres'>+1 212-344-1230</p>
                <p className='footer-contact__addres'>+1 212-555-1230</p>
            </div>
            <div className="footer-desc">
                <div className="footer-logo">
                    <img src={footerLogo} alt="footer logo" />
                </div>
                <p className='footer-desc__text'>"The best way to find yourself is to lose yourself in the service of others.”</p>
                <div className="footer-socials">
                    <a href="#" className='footer-social'>
                    <img src={facebook} alt="facebook" />
                    </a>
                    <a href="#" className='footer-social'>
                    <img src={twitter} alt="twitter" />
                    </a>
                    <a href="#" className='footer-social'>
                    <img src={instagram} alt="instagram" />
                    </a>
                </div>
            </div>
            <div className="footer-contact">
                <h4 className='footer-contact__title'>Working Hours</h4>
                <p className='footer-contact__addres'>Monday-Friday :</p>
                <p className='footer-contact__addres'>08:00 am -12:00 am</p>
                <p className='footer-contact__addres' id='footer-date'>Saturday-Sunday:</p>
                <p className='footer-contact__addres'>07:00am -11:00 pm</p>
            </div>
            </div>
            <p className='footer-end'>2022 Pop online. All Rights reserved.</p>
        </div>
    </footer>
  )
}
