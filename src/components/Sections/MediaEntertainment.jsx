import React from 'react'
import { CardItem } from './Cards'

const MediaEntertainment = () => {
  return (
    <div className="content-item pt-2" id="media-entertainment">
      <h2 className="content-item-header">Media</h2>
      <div className="container-fluid">
        <div className="row g-2">
          <CardItem
            title="CXO Media"
            image="/assets/images/media/1.png"
            urlTarget="/#"
          />
          <CardItem
            title="Detik"
            image="/assets/images/media/2.png"
            urlTarget="/#"
          />
          <CardItem
            title="CNN"
            image="/assets/images/media/3.png"
            urlTarget="/#"
          />
          <CardItem
            title="CNBC"
            image="/assets/images/media/4.png"
            urlTarget="/#"
          />
          <CardItem
            title="Beautynesia"
            image="/assets/images/media/5.png"
            urlTarget="/#"
          />
          <CardItem
            title="Hai Bunda"
            image="/assets/images/media/6.png"
            urlTarget="/#"
          />
          <CardItem
            title="InsertLive"
            image="/assets/images/media/7.png"
            urlTarget="/#"
          />
          <CardItem
            title="TransVision"
            image="/assets/images/media/8.png"
            urlTarget="/#"
          />
          <CardItem
            title="TransTV"
            image="/assets/images/media/9.png"
            urlTarget="/#"
          />
          <CardItem
            title="Trans7"
            image="/assets/images/media/10.png"
            urlTarget="/#"
          />
        </div>
      </div>
    </div>
  )
}

export default MediaEntertainment