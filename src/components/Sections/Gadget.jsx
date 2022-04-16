import React from 'react'
import { CardItem } from './Cards'

const Gadget = () => {
  return (
    <div className="content-item pt-2" id="gadget">
      <h2 className="content-item-header">Gadgets & Electronics</h2>
      <div className="container-fluid">
        <div className="row g-2">
          <CardItem
            title="ElectronicPRO"
            image="/assets/images/gadgets/1.png"
            urlTarget="/#"
          />
          <CardItem
            title="Trans hello!"
            image="/assets/images/gadgets/2.png"
            urlTarget="/#"
          />
        </div>
      </div>
    </div>
  )
}

export default Gadget