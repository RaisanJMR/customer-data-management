'use client'
import { useContext, useState } from 'react'
import Link from 'next/link'
import CustomerContext from './context/CustomerContext'
import Modal from '@/components/Modal'

export default function Home() {
  const { customer } = useContext(CustomerContext)

  const [open, setOpen] = useState(false)
  const [userId, setUserId] = useState('')

  const handleModal = (Id) => {
    setOpen(true)
    setUserId(Id)
  }

  return (
    <main className='min-h-screen bg-custom-grey w-full relative'>
      <div className='min-h-screen w-11/12 pt-10 pl-4 pr-4 ml-auto mr-auto '>
        {open && <Modal userId={userId} closeAlertModal={setOpen} />}
        <div className='flex justify-between w-full mb-14'>
          <h1>customer details</h1>
          <Link href='/add-customer'>
            <button className='bg-slate-200 text-black p-1 rounded-md'>
              add customer
            </button>
          </Link>
        </div>
        {customer.map((data, index) => (
          <div
            className='flex bg-white items-center justify-between py-4 px-3 border-b-2 border-custom-border'
            key={index}>
            <div className='w-1/4'>
              <h1>{data.name}</h1>
            </div>
            <div className='w-1/4'>
              <h1>{data.email}</h1>
            </div>
            <div className='w-1/4'>
              <h1>{data.phone}</h1>
            </div>
            <div className='w-1/4 flex justify-around'>
              <button
                className='bg-slate-200 text-black p-1 rounded-md'
                onClick={() => handleModal(data.id)}>
                Delete
              </button>
              <Link href={`/details/${data.id}`}>
                <p className='underline'>view</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
