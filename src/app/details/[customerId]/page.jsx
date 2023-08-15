"use client"
import { useContext } from 'react'
import CustomerContext from '@/app/context/CustomerContext'
import Link from 'next/link'



function page({ params }) {
    const { customer } = useContext(CustomerContext)
    const { customerId } = params
    const showUser = customer.filter((data) => data.id == customerId)
    return <main className='flex min-h-screen flex-col items-center p-24'>
        <div className='flex justify-end w-full'>
            <Link href={`/update/${customerId}`}>
                <button className='bg-slate-200 text-black p-1 rounded-md'>
                    update details
                </button>
            </Link>
        </div>
        <h1>{showUser[0]?.name}</h1>
        <h1>{showUser[0]?.email}</h1>
        <h1>{showUser[0]?.phone}</h1>
    </main>
}

export default page