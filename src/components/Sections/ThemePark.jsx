import React from 'react'
import { CardItem } from './Cards'

const ThemePark = () => {
  return (
    <div className="content-item pt-2" id="theme-park">
      <h2 className="content-item-header">Theme Park & Entertainment</h2>
      <div className="container-fluid">
        <div className="row g-2">
          <CardItem
            title="Trans Snow World"
            image="./assets/images/theme-park/1.png"
            urlTarget="/#"
          />
          <CardItem
            title="Trans Studio"
            image="./assets/images/theme-park/2.png"
            urlTarget="/#"
          />

          <CardItem
            title="Trans Studio Mini"
            image="./assets/images/theme-park/3.png"
            urlTarget="/#"
          />
          <CardItem
            title="Kid City"
            image="./assets/images/theme-park/4.png"
            urlTarget="/#"
          />
        </div>
      </div>
    </div>
  );
}

export default ThemePark