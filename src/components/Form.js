import React from 'react'
import { useForm } from 'react-hook-form'
import List from './List'


export default function Form() {
    const { register, handleSubmit, resetField } = useForm()
    const onSubmit = async (data) => {
     
        
    }
    return (
        <div className='form max-w-sm mx-auto w-96'>
            <h1 className='capitalize font-bold pb-4 text-xl'>
                transection
            </h1>
            <form id='form' onSubmit={handleSubmit(onSubmit)}>
                <div className='grid gap-4'>
                    <div className='input-group'>
                        <input type='text' {...register('name')} placeholder='sallary,rend,house,SIP' className='form-input' />
                    </div>
                    <select className='form-input' {...register('type')}>
                        <option value='investment' className='capitalize'>investment</option>
                        <option value='savings' className='capitalize'>savings</option>
                        <option value='exspense' className='capitalize'>exspense</option>
                    </select>
                    <div className='input-group'>
                        <input type='text' placeholder='amount' {...register('amount')} className='form-input' />
                    </div>
                    <div className='input-group'>
                        <input type='text' {...register('name')} placeholder='enter hex code' className='form-input' />
                    </div>
                    <div className='subnit-btn'>
                        <button className='border py-2 text-white bg-indigo-500 w-full capitalize rounded-full'>make transection</button>
                    </div>
                </div>
            </form>
            <List />
        </div>
    )
}
