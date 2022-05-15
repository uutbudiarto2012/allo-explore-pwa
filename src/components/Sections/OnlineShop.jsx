import React from 'react'
import { CardItem } from './Cards'

const OnlineShop = () => {
  return (
    <div className="content-item pt-2" id="online-shopping">
      <h2 className="content-item-header">Online Shopping</h2>
      <div className="container-fluid">
        <div className="row g-2">
          <CardItem
            title="Groceries"
            image="./assets/images/online-shopping/1.png"
            urlTarget="/#"
          />
          <CardItem
            title="Fashion"
            image="./assets/images/online-shopping/2.png"
            urlTarget="/#"
          />
          <CardItem
            title="Mom & Baby"
            image="./assets/images/online-shopping/3.png"
            urlTarget="/#"
          />
          <CardItem
            title="Gadged"
            image="./assets/images/online-shopping/4.png"
            urlTarget="/#"
          />
          <CardItem
            title="Beauty"
            image="./assets/images/online-shopping/5.png"
            urlTarget="/#"
          />
          <CardItem
            title="Promo"
            image="./assets/images/online-shopping/6.png"
            urlTarget="/#"
          />
        </div>
      </div>
    </div>
  );
}

export default OnlineShop