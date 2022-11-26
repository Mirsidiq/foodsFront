import React, { Component } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.scss"
import "../../../node_modules/slick-carousel/slick/slick-theme.scss";
import "./slider.scss"
export default class MySlider extends Component {
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
      <>
    <Slider className="custom" ref={c => (this.slider = c)} {...settings}>
        <h1>asd</h1>
        <h1>asd</h1>

        <h1>asd</h1>

        <h1>asd</h1>

        <h1>asd</h1>

    </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </>
    );
  }
}