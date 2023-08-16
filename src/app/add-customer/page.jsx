'use client'
import React, { useState, useContext } from 'react'
import CustomerContext from '../context/CustomerContext'
import { useRouter } from 'next/navigation'

const Page = () => {

    const { addCustomer } = useContext(CustomerContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)

    const [emailFormatError, setEmailFormatError] = useState(false)
    const [phoneFormatError, setPhoneFormatError] = useState(false)

    const router = useRouter()

    const handleSubmit = (e) => {
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
        const newCoustomer = {
            id: Math.floor(Math.random() * 1000),
            name,
            email,
            phone,
        }
        addCustomer(newCoustomer)

        setName("")
        setEmail("")
        setPhone("")

        router.push('/')
    }

    return (
        <main className='flex min-h-screen flex-col items-center p-24'>
            <h1>add new customer</h1>
            <form
                onSubmit={handleSubmit}
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
                        className='w-full outline-none text-black p-2 border-b-2 border-black'
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
                        className='w-full outline-none text-black p-2 border-b-2 border-black'
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
                    <button type='submit'>Add Customer</button>
                </div>
            </form>
        </main>
    )
}

export default Page
