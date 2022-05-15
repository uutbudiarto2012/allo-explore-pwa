import React from 'react'
import { CardItem } from './Cards'

const Healty = () => {
  return (
    <div className="content-item pt-2" id="healty">
      <h2 className="content-item-header">Health & Beauty</h2>
      <div className="container-fluid">
        <div className="row g-2">
          <CardItem
            title="Female Daily"
            image="./assets/images/healty/1.png"
            urlTarget="/#"
          />
          <CardItem
            title="Beautynesia"
            image="./assets/images/healty/2.png"
            urlTarget="/#"
          />
          <CardItem
            title="Metro"
            image="./assets/images/healty/3.png"
            urlTarget="/#"
          />
        </div>
      </div>
    </div>
  );
}

export default Healty