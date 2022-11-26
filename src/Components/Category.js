import React from 'react'
import CategoryItem from './CategoryItem'

export default function Category(props) {
  return (
    <div className='py-8 px-4'>
        <div className='flex'>
        <h3 style={{boxShadow:"0px 0px 10px white"}} className='text-3xl whitespace-nowrap text-white w-max p-2 px-4   shadow-white'>
            {props.title}
        </h3><div style={{boxShadow:"0px 0px 20px white"}} className='m-auto border-t   border-white w-full h-0' />
        </div>
        <div className='grid grid-cols-8 py-4 gap-56'>
            {props.items.map((item,key) =>{
                return <CategoryItem key={key} item={item}/>
            })}
        </div>
    </div>
  )
}
