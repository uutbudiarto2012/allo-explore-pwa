import React from 'react'
import { CardItem } from './Cards'

const Ticket = () => {
  return (
    <div className="content-item pt-2" id="ticket">
      <h2 className="content-item-header">Ticket, Tour & Hotel</h2>
      <div className="container-fluid">
        <div className="row g-2">
          <CardItem
            title="Antavaya"
            image="./assets/images/ticket/1.png"
            urlTarget="/#"
          />
          <CardItem
            title="Trans Hotel Group"
            image="./assets/images/ticket/2.png"
            urlTarget="/#"
          />
        </div>
      </div>
    </div>
  );
}

export default Ticket