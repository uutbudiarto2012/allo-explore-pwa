import React from 'react'
import { CardItem } from './Cards'

const MallProperty = () => {
  return (
    <div className="content-item pt-2" id="mall-property">
      <h2 className="content-item-header">Mall & Property</h2>
      <div className="container-fluid">
        <div className="row g-2">
          <CardItem
            title="Trans Shopping Mall"
            image="/assets/images/mall-property/1.png"
            urlTarget="/#"
          />
          <CardItem
            title="TransProperty"
            image="/assets/images/mall-property/2.png"
            urlTarget="/#"
          />
        </div>
      </div>
    </div>
  )
}

export default MallProperty