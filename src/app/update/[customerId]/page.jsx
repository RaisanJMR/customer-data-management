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

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)

    const [emailFormatError, setEmailFormatError] = useState(false)
    const [phoneFormatError, setPhoneFormatError] = useState(false)

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
        if (!name || !email || !phone) {
            setNameError(true)
            setEmailError(true)
            setPhoneError(true)
            return
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/;

        if (!emailPattern.test(email)) {
            setEmailFormatError(true)
            setEmailError(false)
            return;
        }

        if (!phonePattern.test(phone)) {
            setPhoneFormatError(true);
            setPhoneError(false)
            return;
        }
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
                        className='w-full outline-none border-b-2 border-black text-black p-2'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name='name'
                        id='name'
                        placeholder='customer name'
                  
                    />
                                        {nameError ? <p className='text-red-500 text-xs'>*name required</p> : <p className='invisible text-red-500 text-xs'>*name</p>}

                </div>
                <div className='my-3 w-full'>
                    <input
                        className='w-full outline-none border-b-2 border-black text-black p-2'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        id='email'
                        placeholder='customer email'
             
                    />
                    <div className='flex items-center justify-between'>
                        {emailError ? <p className='text-red-500 text-xs'>*email required</p> : <p className='invisible text-red-500 text-xs'>*email</p>}
                        {emailFormatError ? <p className='text-red-500 text-xs'>*email number wrong format</p> : <p className='invisible text-red-500 text-xs'>*email</p>}
                    </div>
                </div>
                <div className='my-3 w-full'>
                    <input
                        className='w-full outline-none border-b-2 border-black text-black p-2'
                        type='tel'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        name='tel'
                        id='tel'
                        placeholder='phone number'
                 
                    />
                     <div className='flex items-center justify-between'>
                     {phoneError ? <p className='text-red-500 text-xs'>*phone number required</p> : <p className='invisible text-red-500 text-xs'>*phone</p>}
                     {phoneFormatError ? <p className='text-red-500 text-xs'>*phone number wrong format</p> : <p className='invisible text-red-500 text-xs'>*phone</p>}
                    </div>
                </div>
                <div className='my-3 flex items-center justify-center bg-slate-200 text-black p-1 rounded-md'>
                    <button type='submit'>Save Customer</button>
                </div>
            </form>
        </main>
    )
}

export default Page