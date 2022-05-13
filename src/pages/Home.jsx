import React from 'react'
import AppHeader from '../components/AppHeader'
import Banner from '../components/Banner'
import {
  BankFinance,
  Events,
  Fashion,
  Food,
  Gadget,
  Games,
  Healty,
  HomeLiving,
  HyperMarket,
  MallProperty,
  MediaEntertainment,
  OnlineShop,
  Social,
  ThemePark,
  Ticket
} from '../components/Sections'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <>
      <AppHeader />
      <Banner />
      <main>
        <Sidebar />
        <div className="content">
          <OnlineShop />
          <HyperMarket />
          <Gadget />
          <HomeLiving />
          <Healty />
          <Fashion />
          <Food />
          <Ticket />
          <ThemePark />
          <MallProperty />
          <BankFinance />
          <MediaEntertainment />
          <Games />
          <Events />
          <Social />
        </div>
      </main>
    </>
  )
}

export default Home