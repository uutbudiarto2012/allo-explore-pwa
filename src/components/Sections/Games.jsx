import React from 'react'
import { CardItem } from './Cards'

const Games = () => {
  return (
    <div className="content-item pt-2" id="game">
      <h2 className="content-item-header">Games</h2>
      <div className="container-fluid">
        <div className="row g-2">
          <CardItem
            title="Lucky Turn table"
            image="./assets/images/game/1.png"
            urlTarget="/#"
          />
          <CardItem
            title="Smashing Golden Egg"
            image="./assets/images/game/2.png"
            urlTarget="/#"
          />
        </div>
      </div>
    </div>
  );
}

export default Games