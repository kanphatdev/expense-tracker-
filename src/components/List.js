import React from 'react'
import 'boxicons'
import Transaction from './Transaction';
export default function List() {
  return (
    <div className='flex flex-col py-6 gap-3'>
        <h1 className='capitalize py-4 text-md font-bold'>history</h1>
       <Transaction/>
        
    </div>
  )
 
}
