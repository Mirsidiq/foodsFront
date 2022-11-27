import React from 'react'
import "./card.scss"
export default function Card({cardInfo}) {
  console.log(cardInfo);
  return (
    <article className='card'>
        <img src={cardInfo[0]} alt="image" className='card__img' />
        <h3 className='card__title'>{cardInfo[1]}</h3>
        <p className='card__price'>{cardInfo[2]}</p>
    </article>
  )
}
