import React from 'react'

const Card = ({ titulo, img, precio, setEstado, setImagen, setTitulo, setPrecio}) => {
    return (
        <div className='flex flex-col items-center w-[200px] bg-gray-100 rounded-3xl'onClick={()=>{setEstado(true);setImagen(img);setTitulo(titulo);setPrecio(precio)}}>
            <img className='w-[130px]' src={img} alt="" />
            <h1 className='font-extrabold'>{titulo}</h1>
            <h2>${precio}</h2>
        </div>
    )
}

export default Card