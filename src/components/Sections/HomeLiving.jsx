import React from 'react'
import { CardItem } from './Cards'

const HomeLiving = () => {
  return (
    <div className="content-item pt-2" id="home-living">
      <h2 className="content-item-header">Home & Living</h2>
      <div className="container-fluid">
        <div className="row g-2">
          <CardItem
            title="Metro"
            image="/assets/images/home-living/1.png"
            urlTarget="/#"
          />
          <CardItem
            title="TransLiving"
            image="/assets/images/home-living/2.png"
            urlTarget="/#"
          />
          <CardItem
            title="okiDoki"
            image="/assets/images/home-living/3.png"
            urlTarget="/#"
          />
          <CardItem
            title="TransHardware"
            image="/assets/images/home-living/4.png"
            urlTarget="/#"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeLiving