import React,{Component} from 'react'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.scss"
import "../../../node_modules/slick-carousel/slick/slick-theme.scss";
import Button from '../../components/Button/Button'
import "./main.scss"
import heroBg from"../../assets/images/main-bg.png"
import arrowLeft from"../../assets/images/left-arrow.svg"
import Card from '../../components/Cards/Card';
import popularImage from "../../assets/images/popular1.jpg"
import emblem from "../../assets/images/emblem.png"
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.paginateNext = this.paginateNext.bind(this);
        this.paginatePrevious = this.paginatePrevious.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
      paginateNext(){
        this.paginate.slickNext();
      }
      paginatePrevious(){
        this.paginate.slickPrev();
      }
    render() {
        let data=this.props
        const settings = {
          infinite: true,
          speed: 500,
          slidesToShow:4,
          slidesToScroll:4,
          arrows:false,
          swipeToSlide:true
        };
        const regularMenu = {
          infinite: false,
          speed: 500,
          slidesToShow:6,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows:false
        };
        const pagination = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow:3,
          slidesToScroll:3,
          arrows:false,
          appendDots: dots => (
            <div
              style={{
                backgroundColor: "transparent"
              }}
            >
              <ul className='testimonial__paginate'>
                <button style={{marginRight:"0px"}} className='popular__prev'onClick={this.paginatePrevious}><img src={arrowLeft} alt="arrow left" /></button>
                <span className='testimonial__dots'>{dots} </span>
              <button className='popular__next' onClick={this.paginateNext}><img src={arrowLeft} alt="arrow right" /></button>
            </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                height:"30px"
              }}
            >
              {i+1}
            </div>
          )
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
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
            </Slider>
            </div>
            <div className="popular__emblem">
              <img src={emblem} alt="an emblem" />
            </div>
            </div>
        </section>
        <section className="regular">
          <div className="container">
            <h3 className="section__title regular__title">Our Regular Menu Pack</h3>
            <ul className='regular__list'>
              <Slider className='regular__slider' {...regularMenu}>
              <li className="regular__item"><Button id='regular__link'>All</Button></li>
              <li className="regular__item"><Button id='regular__link'>Shawarma</Button></li>
              <li className="regular__item"><Button id='regular__link'>Turk Kebab</Button></li>
              <li className="regular__item"><Button id='regular__link'>Hamburger Kebab</Button></li>
              <li className="regular__item"><Button id='regular__link'>Doner kebab</Button></li>
              <li className="regular__item"><Button id='regular__link'>Shish kebab</Button></li>
              <li className="regular__item"><Button id='regular__link'>French fries Pizza</Button></li>
              <li className="regular__item"><Button id='regular__link'>Desserts</Button></li>
              <li className="regular__item"><Button id='regular__link'>Desserts</Button></li>
              <li className="regular__item"><Button id='regular__link'>Desserts</Button></li>
              <li className="regular__item"><Button id='regular__link'>Desserts</Button></li>
              <li className="regular__item"><Button id='regular__link'>Desserts</Button></li>
              </Slider>
            </ul>
            <ul className='regular__foods'>
              <li className='regular__food'>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              </li>
              <li className='regular__food'>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              </li>
              <li className='regular__food'>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              </li>
              <li className='regular__food'>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              </li>
              <li className='regular__food'>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              </li>
              <li className='regular__food'>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              </li>
              <li className='regular__food'>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              </li>
              <li className='regular__food'>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              </li>
              <li className='regular__food'>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              </li>
              <li className='regular__food'>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              </li>
              <li className='regular__food'>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              </li>
              <li className='regular__food'>
              <Card cardInfo={[popularImage,"Barbecue Shish kebab Shashlik Skewer","$12.00"]}/>
              </li>
            </ul>
          </div>
        </section>
        <section className="testimonial">
          <div className="container">
            <div className="testimonial__header">
              <span className="testimonial__suptitle">
              Testimony
              </span>
              <h3 className="testimonial__title">
              Happy customers
              </h3>
            </div>
            <ul className="testimonial__list">
            <Slider ref={page => (this.paginate = page)} {...pagination}>
            <li className="testimonial__item">
                <TestimonialCard testimonialInfo={["Maria","Я всегда был  самым худым и щуплым ребенком среди своих сверстников. Я всегда мечтал стать как мой кумир и иметь интерес...","06/02/2022","11:15","222"]}/>
              </li>
              <li className="testimonial__item">
                <TestimonialCard testimonialInfo={["Maria","Я всегда был  самым худым и щуплым ребенком среди своих сверстников. Я всегда мечтал стать как мой кумир и иметь интерес...","06/02/2022","11:15","222"]}/>
              </li>
              <li className="testimonial__item">
                <TestimonialCard testimonialInfo={["Maria","Я всегда был  самым худым и щуплым ребенком среди своих сверстников. Я всегда мечтал стать как мой кумир и иметь интерес...","06/02/2022","11:15","222"]}/>
              </li>
              <li className="testimonial__item">
                <TestimonialCard testimonialInfo={["Maria","Я всегда был  самым худым и щуплым ребенком среди своих сверстников. Я всегда мечтал стать как мой кумир и иметь интерес...","06/02/2022","11:15","222"]}/>
              </li>
              <li className="testimonial__item">
                <TestimonialCard testimonialInfo={["Maria","Я всегда был  самым худым и щуплым ребенком среди своих сверстников. Я всегда мечтал стать как мой кумир и иметь интерес...","06/02/2022","11:15","222"]}/>
              </li>
              <li className="testimonial__item">
                <TestimonialCard testimonialInfo={["Maria","Я всегда был  самым худым и щуплым ребенком среди своих сверстников. Я всегда мечтал стать как мой кумир и иметь интерес...","06/02/2022","11:15","222"]}/>
              </li>
              <li className="testimonial__item">
                <TestimonialCard testimonialInfo={["Maria","Я всегда был  самым худым и щуплым ребенком среди своих сверстников. Я всегда мечтал стать как мой кумир и иметь интерес...","06/02/2022","11:15","222"]}/>
              </li>
              <li className="testimonial__item">
                <TestimonialCard testimonialInfo={["Maria","Я всегда был  самым худым и щуплым ребенком среди своих сверстников. Я всегда мечтал стать как мой кумир и иметь интерес...","06/02/2022","11:15","222"]}/>
              </li>
            </Slider>
            </ul>
          </div>
        </section>
        <section className="news">
          <div className="container">
          <div className="testimonial__header">
              <span className="testimonial__suptitle">
              News
              </span>
              <h3 className="testimonial__title">
              Gerícht updates
              </h3>
            </div>
          </div>
        </section>
    </main>
  );
}
}
