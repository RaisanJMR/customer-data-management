"use client"
import CustomerContext from '@/app/context/CustomerContext'
import React, { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'

const Page = ({ params }) => {
    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const { customer, editCustomer } = useContext(CustomerContext)
    const { customerId } = params

    useEffect(() => {
        const currentUser = customer.filter((data) => data.id === parseInt(customerId))
        if (currentUser) {
            setName(currentUser[0]?.name)
            setEmail(currentUser[0]?.email)
            setPhone(currentUser[0]?.phone)
        }
    }, [customerId, customer])


    const handleEdit = (e) => {
        e.preventDefault()
        const updatedCustomer = {
            id: parseInt(customerId),
            name,
            email,
            phone
        }
        editCustomer(updatedCustomer)
        router.push('/')
    }

    return (
        <main className='flex min-h-screen flex-col items-center p-24'>
            <h1>Edit Details</h1>
            <form
                onSubmit={handleEdit}
                className='flex flex-col items-center justify-between w-1/2'>
                <div className='my-3 w-full'>
                    <input
                        className='w-full text-black p-2 rounded-md'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name='name'
                        id='name'
                        placeholder='customer name'
                        required
                    />
                </div>
                <div className='my-3 w-full'>
                    <input
                        className='w-full text-black p-2 rounded-md'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        id='email'
                        placeholder='customer email'
                        required
                    />
                </div>
                <div className='my-3 w-full'>
                    <input
                        className='w-full text-black p-2 rounded-md'
                        type='tel'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        name='tel'
                        id='tel'
                        placeholder='phone number'
                        required
                    />
                </div>
                <div className='my-3 flex items-center justify-center bg-slate-200 text-black p-1 rounded-md'>
                    <button type='submit'>Save Customer</button>
                </div>
            </form>
        </main>
    )
}

export default Page