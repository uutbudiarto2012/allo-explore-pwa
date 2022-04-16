import React from 'react'
import { CardItem } from './Cards'

const Social = () => {
  return (
    <div className="content-item pt-2" id="social">
      <h2 className="content-item-header">Social</h2>
      <div className="container-fluid">
        <div className="row g-2">
          <CardItem
            title="Berbuat Baik"
            image="/assets/images/social/1.png"
            urlTarget="/#"
          />
        </div>
      </div>
    </div>
  )
}

export default Social