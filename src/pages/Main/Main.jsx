import React from 'react'
import Button from '../../components/Button/Button'
import "./main.scss"
import heroBg from"../../assets/images/main-bg.png"
export default function Main() {
  return (
    <main>
        <section className='hero'>
            <div className="hero__container">
                <div className="hero__info">
                    <span className="hero__suptitle">Chase the new Flavour</span>
                    <h1 className="hero__title">The key to Fine dining</h1>
                    <p className="hero__text">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                    <Button id='hero__btn'>explore menu</Button>
                </div>
                <div>
                <img src={heroBg} alt="hero image" className="hero__img" />
                </div>
            </div>
            <div className="hero__container">
            <a href="#" className='hero__scroll'>
                Scroll
            </a>
            </div>
        </section>
        <section className="popular">
            <div className="container">
            <div className="popular__inner">
            <h3 className="section__title popular__title">
                Popular dishes
            </h3>
            </div>
            </div>
        </section>
    </main>
  )
}
