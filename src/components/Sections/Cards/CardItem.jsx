import React from 'react'

const CardItem = ({title,urlTarget,image}) => {
  return (
    <div className="col-6">
      <div className="card-category-wrapper">
        <a href={urlTarget} className="card-item-link">
          <div className="img-container">
            <img
              src={image}
              alt={title}
            />
          </div>
          <span>{title}</span>
        </a>
      </div>
    </div>
  )
}

export default CardItem