import React from 'react'
import { CardItem } from './Cards'

const Fashion = () => {
  return (
    <div className="content-item pt-2" id="fashion">
      <h2 className="content-item-header">Fashion</h2>
      <div className="container-fluid">
        <div className="row g-2">
          <CardItem
            title="Salvatore Ferragamo"
            image="./assets/images/fashion/1.png"
            urlTarget="/#"
          />
          <CardItem
            title="Boss"
            image="./assets/images/fashion/2.png"
            urlTarget="/#"
          />
          <CardItem
            title="Fulra"
            image="./assets/images/fashion/3.png"
            urlTarget="/#"
          />
          <CardItem
            title="Aigner"
            image="./assets/images/fashion/4.png"
            urlTarget="/#"
          />
          <CardItem
            title="Geox"
            image="./assets/images/fashion/5.png"
            urlTarget="/#"
          />
          <CardItem
            title="Canali"
            image="./assets/images/fashion/6.png"
            urlTarget="/#"
          />
          <CardItem
            title="Find Kapoor"
            image="./assets/images/fashion/7.png"
            urlTarget="/#"
          />
          <CardItem
            title="Seen"
            image="./assets/images/fashion/8.png"
            urlTarget="/#"
          />
          <CardItem
            title="Spord"
            image="./assets/images/fashion/9.png"
            urlTarget="/#"
          />
          <CardItem
            title="Metro"
            image="./assets/images/fashion/10.png"
            urlTarget="/#"
          />
          <CardItem
            title="Transmart"
            image="./assets/images/fashion/11.png"
            urlTarget="/#"
          />
        </div>
      </div>
    </div>
  );
}

export default Fashion