import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className='group relative'>
      <Link to={`/products/${product?.id}`}>
      <div className='relative overflow-hidden rounded-md bg-gray-800/80 lg:h-80 h-96 border-gray-700/50'>
        
        <img src={product?.image} 
        alt={product?.name}
         className='h-full w-full object-cover object-center transitions-transform duration-500 group-hover:scale-110' />
         <div className='absolute top-0 left-0 right-0 h-0 group-hover:h-full bg-gray-700/70 transition-all ease-out'></div>
      </div>

      
      </Link>
      <div className='mt-4 flex justify-between'>
        <div>
            <h3 className='text-sm text-foreground'>
                <Link to={`/products/${product?.id}`}>
                <span aria-hidden="true" className='inset-0'>{product?.name}</span>
                </Link>
            </h3>
        </div>
        <p className='text-sm font-medium text-foreground'>${product?.new_price}</p>
      </div>
    </div>
  )
}

export default Item
