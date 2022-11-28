import React from 'react'
import "./newsCard.scss"
export default function NewsCard({newsInfo}) {
  return (
    <article className='news-card'>
        <div className="news-card__header">
            <img src={newsInfo[0]} alt="an image" className='news-card__img' />
        </div>
        <div className="news-card__body">
            <div className="news-card__info">
                <h4 className="news-card__title">{newsInfo[1]}</h4>
                <p className="news-card__text">{newsInfo[2]}</p>
                <div className="news-card__bottom">
                    <span className='news-card__read'>Read more</span>
                    <span className='news-card__date'>{newsInfo[3]}</span>
                </div>
            </div>
        </div>
    </article>
  )
}
