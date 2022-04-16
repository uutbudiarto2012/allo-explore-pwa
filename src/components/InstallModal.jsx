import React from 'react'
import { usePwa } from "react-pwa-app";

const InstallModal = () => {
  const pwa = usePwa();
  return (
    <div className='modal-install-app'>
      <div className="img-container">
        <img src="/logo192.png" alt="" />
      </div>
      <button onClick={pwa.install}>INSTALL ALLO EXPLORE</button>
    </div>
  )
}

export default InstallModal