import React,{Component} from 'react'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.scss"
import "../../../node_modules/slick-carousel/slick/slick-theme.scss";
import Button from '../../components/Button/Button'
import "./main.scss"
import heroBg from"../../assets/images/main-bg.png"
import arrowLeft from"../../assets/images/left-arrow.svg"
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
    render() {
        let data=this.props
        const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1
        };
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
                <div>
                <button className='popular__prev' onClick={this.previous}><img src={arrowLeft} alt="arrow left" /></button>
                 <button className='popular__next' onClick={this.next}><img src={arrowLeft} alt="arrow right" /></button>
                </div>
            </div>
            <div className='popular__slider'>
            <Slider className="custom" ref={c => (this.slider = c)} {...settings}>
                <h1>Mrsadas</h1>
                <h1>Mrsadas</h1>

                <h1>Mrsadas</h1>

                <h1>Mrsadas</h1>
            </Slider>
            </div>
            </div>
        </section>
    </main>
  );
}
}
