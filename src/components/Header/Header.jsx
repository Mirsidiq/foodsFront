import React from 'react'
import './header.scss'
import {NavLink} from "react-router-dom"
import Button from "../Button/Button.jsx"
import headerLogo from "../../assets/images/header-logo.png"
export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="header__inner">
                <a href="#">
                    <img src={headerLogo} alt="header logo" />
                </a>
                <nav className='nav'>
                    <ul className="nav__list">
                        <li className='nav__item'>
                        <NavLink className='nav__link' to="#">
                            menu
                        </NavLink>
                        </li>
                        <li className='nav__item'>
                        <NavLink className='nav__link' to="#">
                            news
                        </NavLink>
                        </li>
                        <li className='nav__item'>
                        <NavLink className='nav__link' to="#">
                            about us
                        </NavLink>
                        </li>
                        <li className='nav__item'>
                        <NavLink className='nav__link' to="#">
                            contact us
                        </NavLink>
                        </li>
                        <li className='nav__item'>
                            <Button className='nav__link' id='login'>
                                log in
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}
