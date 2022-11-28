import React from 'react'
export default function CategoryItem(props) {
  return (
    <div className='w-56 p-4 text-center hover:drop-shadow-xl'>
        <img className="m-auto w-48 h-64   transition ease-in-out delay-100 hover:scale-110" src={props.item.src}/>
        <div className='py-4 '> 
            <div className='text-white bg-secondary h-32 rounded '>
                <div className='p-2 h-14'>
                    {props.item.name}
                </div>
               
                <div className='h-54 w-full'>
                    <div className='h-0 border-b border-gray w-3/4 m-auto py-2 '></div>
                    <div className='grid grid-cols-2 pt-2'>
                        <div className='m-auto'>
                            <button className=''><img className='h-8' src={require('../Images/shop.png')} alt='Add to cart'/></button>
                            <button className=''> <img className='h-8'  src={require('../Images/wishlist.png')} alt='Add to cart'/></button>
                        </div>
                    <div className='text-xl m-auto'>{props.item.price} $</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
