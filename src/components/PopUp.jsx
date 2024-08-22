import React from 'react'

const PopUp = ({ setEstado, img, nike, precio, titulo, bag, v, cajanike }) => {
  return (
    <div className='popup'>
      <div className='flex items-center gap-10'>
        <ul className="menu bg-base-200 rounded-box" onClick={()=>setEstado(false)}>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="#000000"
                viewBox="0 0 448 512"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </a>
          </li>
        </ul>
        <h1 className='titulo'>{titulo}</h1>
        <ul className="menu bg-base-200 rounded-box">
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="#000000"
                viewBox="0 0 448 512"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <img className='imagenpop' src={img} alt="" />
      <img className='nike absolute w-20 top-16 z-0' src={nike} alt="" />
      <div className='precioydescuento'>
      <h1 className='precio'>${precio}</h1>
      {/* <h1 className='descuentico'>10% OFF</h1> */}
      </div>
      <h1 className='swipe'>Swipe down to add</h1>
      <div className='fondonegro'>
        <img src={bag} alt="" />
        <img src={v} alt="" />
      </div>
      <img className='caja' src={cajanike} alt="" />
    </div>
  )
}

export default PopUp