import React from 'react'
import { CardItem } from './Cards'

const HyperMarket = () => {
  return (
    <div className="content-item pt-2" id="hyper-market">
      <h2 className="content-item-header">Hypermarket & Dept. Store</h2>
      <div className="container-fluid">
        <div className="row g-2">
          <CardItem
            title="Metro"
            image="/assets/images/hypermart/1.png"
            urlTarget="/#"
          />
          <CardItem
            title="Transmart"
            image="/assets/images/hypermart/2.png"
            urlTarget="/#"
          />
          <CardItem
            title="Multimart"
            image="/assets/images/hypermart/3.png"
            urlTarget="/#"
          />
        </div>
      </div>
    </div>
  )
}

export default HyperMarket