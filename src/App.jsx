import React, { useState } from 'react';

import Card from './components/Card';
import zapato2 from './assets/zapato2.png';
import zapato3 from './assets/zapato3.png';
import zapato4 from './assets/zapato4.png';
import zapato5 from './assets/zapato5.png';

import Bar from './components/Bar';

import home from './assets/home.png';
import mark from './assets/mark.png';
import bell from './assets/bell.png';
import user from './assets/user.png';

import cajanike from './assets/cajanike.png';
import nike from './assets/nike.png';
import bag from './assets/bag.png';
import v from './assets/v.png';


import PopUp from './components/PopUp';

const App = () => {

  const [estado, setEstado] = useState(false);
  const [imagen, setImagen] = useState();
  const [titulo, setTitulo] = useState();
  const [precio, setPrecio] = useState();

  return (
    <div className='nike flex flex-col content-center items-center'>


      <div className='seccion1 flex gap-80 mt-1'>
        <img src="src/assets/Hora.png" alt="" />
        <img src="src/assets/iconos.png" alt="" />
      </div>


      <div className='seccion2 flex gap-72 mt-2'>
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
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </a>
          </li>
        </ul>



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


      <div className='seccion3 bg-gray-100 pt-1 pb-1 pl-4 pr-4 rounded-3xl flex items-center mt-1 '>
        <div className='descuento mt-10'>
          <h1 className='text-3xl'><b>20% Discount</b></h1>
          <h1 className='text-lg'>on your first purchase</h1>
          <button className="btn bg-black text-white rounded-3xl mt-5 pr-10 pl-10">Shop now</button>
        </div>
        <div className='zapato1'>
          <img src="src/assets/zapato1.png" alt="" />
        </div>
      </div>
      <div className='circulos flex gap-3 mt-2'>
        <img src="src/assets/circulo1.png" alt="" />
        <img src="src/assets/circulo2.png" alt="" />
        <img src="src/assets/circulo2.png" alt="" />
        <img src="src/assets/circulo2.png" alt="" />
      </div>


      <div className='seccion4 flex items-center gap-9'>
        <button className="btn bg-black text-white rounded-3xl pr-9 pl-9">All</button>
        <h1 className='text-gray-500'>Running</h1>
        <h1 className='text-gray-500'>Sneakers</h1>
        <h1 className='text-gray-500'>Formal</h1>
        <h1 className='text-gray-500'>Casual</h1>
      </div>


      <div className='seccion5 flex flex-col content-center items-center'>
        <div className='cartas1 flex gap-5 mt-1'>
          <Card setEstado={setEstado} setImagen={setImagen} setTitulo={setTitulo} setPrecio={setPrecio} img={zapato2} titulo={"Air Max 97"} precio={"20.99"} />
          <Card setEstado={setEstado} setImagen={setImagen} setTitulo={setTitulo} setPrecio={setPrecio} img={zapato3} titulo={"Air Presto"} precio={"25.99"} />

          {/* <div className='zapato4 bg-gray-100 rounded-3xl p-5'>
            <img src="src/assets/zapato4.png" alt="" />
            <h1 className='text-xl'><b>Air Max 97</b></h1>
            <div className='flex gap-20'>
              <h1><b>$20.99</b></h1>
              <img src="src/assets/flecha.png" alt="" />
            </div>
          </div> */}
          {/* <div className='zapato4 bg-gray-100 rounded-3xl p-5'>
            <img src="src/assets/zapato4.png" alt="" />
            <h1 className='text-xl'><b>React Presto</b></h1>
            <div className='flex gap-20'>
              <h1><b>$25.99</b></h1>
              <img src="src/assets/flecha.png" alt="" />
            </div>
          </div> */}
        </div>
        <div className='cartasdos'>
          <div className='cartas2 flex gap-5 mt-1 mb-4 '>
          <Card setEstado={setEstado} setImagen={setImagen} setTitulo={setTitulo} setPrecio={setPrecio} img={zapato4} titulo={"Air Max 97"} precio={"20.99"} />
          <Card setEstado={setEstado} setImagen={setImagen} setTitulo={setTitulo} setPrecio={setPrecio} img={zapato5} titulo={"KD13 EP"} precio={"25.99"} />

            {/* <div className='zapato4 bg-gray-100 rounded-3xl p-5'>
            <img src="src/assets/zapato4.png" alt="" />
            </div>
          <div className='zapato4 bg-gray-100 rounded-3xl p-5'>
            <img src="src/assets/zapato5.png" alt="" />
          </div> */}
          </div>
        </div>
      </div>

      <div className='seccion6 bg-white rounded-3xl pt-5 pr-[90px] pl-[90px] pb-5 absolute mt-[631px]'>
        <div className='flex gap-16'>
          <Bar imagen={home}/>
          <Bar imagen={mark}/>
          <Bar imagen={bell}/>
          <Bar imagen={user}/>

          {/* <img src="src/assets/home.png" alt="" />
          <img src="src/assets/mark.png" alt="" />
          <img src="src/assets/bell.png" alt="" />
          <img src="src/assets/user.png" alt="" /> */}

          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#000000" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#000000" d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg> */}
        </div>
      </div>
      {estado && <PopUp setEstado={setEstado} img={imagen} nike={nike} titulo={titulo} precio={precio} bag={bag} v={v} cajanike={cajanike} />}
    </div>
  )
}
export default App