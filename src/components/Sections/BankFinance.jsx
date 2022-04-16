import React from 'react'
import { CardItem } from './Cards'

const BankFinance = () => {
  return (
    <div className="content-item pt-2" id="bank-and-finance">
      <h2 className="content-item-header">Bank & Finance</h2>
      <div className="container-fluid">
        <div className="row g-2">
          <CardItem
            title="Allobank"
            image="/assets/images/bank/1.png"
            urlTarget="/#"
          />
          <CardItem
            title="Bank Mega"
            image="/assets/images/bank/2.png"
            urlTarget="/#"
          />
          <CardItem
            title="Bank Mega Syariah"
            image="/assets/images/bank/3.png"
            urlTarget="/#"
          />
          <CardItem
            title="PFI Mega Life"
            image="/assets/images/bank/4.png"
            urlTarget="/#"
          />
          <CardItem
            title="Mega Capital"
            image="/assets/images/bank/5.png"
            urlTarget="/#"
          />
          <CardItem
            title="Mega Insurance"
            image="/assets/images/bank/6.png"
            urlTarget="/#"
          />
          <CardItem
            title="Mega Auto & Central Finance"
            image="/assets/images/bank/7.png"
            urlTarget="/#"
          />
          <CardItem
            title="Mega Finance"
            image="/assets/images/bank/8.png"
            urlTarget="/#"
          />
          <CardItem
            title="BPD Sulut"
            image="/assets/images/bank/9.png"
            urlTarget="/#"
          />
          <CardItem
            title="BPD Sulteng"
            image="/assets/images/bank/10.png"
            urlTarget="/#"
          />
          <CardItem
            title="BPD Bengkulu"
            image="/assets/images/bank/11.png"
            urlTarget="/#"
          />
        </div>
      </div>
    </div>
  )
}

export default BankFinance