import React from 'react'
import { CardItem } from './Cards'

const Events = () => {
  return (
    <div className="content-item pt-2" id="event">
      <h2 className="content-item-header">Events</h2>
      <div className="container-fluid">
        <div className="row g-2">
          <CardItem
            title="Detik Events"
            image="/assets/images/event/1.png"
            urlTarget="/#"
          />
        </div>
      </div>
    </div>
  )
}

export default Events