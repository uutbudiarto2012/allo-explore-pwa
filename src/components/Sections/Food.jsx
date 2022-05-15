import React from 'react'
import { CardItem } from './Cards'

const Food = () => {
  return (
    <div className="content-item pt-2" id="foods">
      <h2 className="content-item-header">Food & Beverage</h2>
      <div className="container-fluid">
        <div className="row g-2">
          <CardItem
            title="Baskin Robbins"
            image="./assets/images/food/1.png"
            urlTarget="/#"
          />
          <CardItem
            title="The Cofee Bean"
            image="./assets/images/food/2.png"
            urlTarget="/#"
          />
          <CardItem
            title="Wendy's"
            image="./assets/images/food/3.png"
            urlTarget="/#"
          />
          <CardItem
            title="Tasty Kitchen"
            image="./assets/images/food/4.png"
            urlTarget="/#"
          />
          <CardItem
            title="Warung Wardani"
            image="./assets/images/food/5.png"
            urlTarget="/#"
          />
          <CardItem
            title="Gyu Katsu Nikaido"
            image="./assets/images/food/6.png"
            urlTarget="/#"
          />
        </div>
      </div>
    </div>
  );
}

export default Food