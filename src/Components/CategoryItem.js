import React from 'react'
export default function CategoryItem(props) {
  return (
    <div className='w-56 h-96 p-4 text-center hover:drop-shadow-xl'>
        <img className="m-auto w-48 h-64   transition ease-in-out delay-100 hover:scale-110" src={props.item.src}/>
        <div className='py-4 '> 
            <div className='text-white bg-secondary h-32 rounded '>
                <div className='p-2 h-16'>
                    {props.item.name}
                </div>
               
                <div className='h-54 w-full'>
                    <div className='h-0 border-b border-gray w-3/4 m-auto py-2 '></div>
                    <div>{props.item.price} $</div>
                    <img src="../../public/ShopIcon.png"/>
                    <button className=''>wishlist</button>
                </div>
            </div>
        </div>
    </div>
  )
}
