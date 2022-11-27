import React from 'react'
import "./testimonialCard.scss"
import clock from "../../assets/images/clock.svg"
import calendar from "../../assets/images/calendar.svg"
import eye from "../../assets/images/eye.svg"

export default function TestimonialCard({testimonialInfo}) {
  return (
    <article className='testimonial-card'>
        <h4 className="testimonial-card__title">{testimonialInfo[0]}</h4>
        <p className="testimonial-card__text">{testimonialInfo[1]}</p>
        <div className="testimonial-card__footer">
            <div className="testimonial-card__footer__inner">
                <img src={calendar} alt="calendar" />
                <span className='testimonial-card__date'>{testimonialInfo[2]}</span>
            </div>
            <div className="testimonial-card__footer__inner">
                <img src={clock} alt="clock" />
                <span className='testimonial-card__date'>{testimonialInfo[3]}</span>
            </div>
            <div className="testimonial-card__footer__inner">
                <img src={eye} alt="eye" />
                <span className='testimonial-card__date'>{testimonialInfo[4]}</span>
            </div>
        </div>
    </article>
  )
}
