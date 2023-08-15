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
    <main className='min-h-screen p-24 relative'>
      {open && <Modal userId={userId} closeAlertModal={setOpen} />}
      <div className='flex justify-end w-full'>
        <Link href='/add-customer'>
          <button className='bg-slate-200 text-black p-1 rounded-md'>
            add customer
          </button>
        </Link>
      </div>
      <h1 className='mb-3.5'>customer details</h1>
 {customer.map((data, index) => (
          <div className='flex items-center justify-between my-2' key={index}>
            <h1>{data.name}</h1>
            <h1>{data.email}</h1>
            <h1>{data.phone}</h1>
            <button
              className='bg-slate-200 text-black p-1 rounded-md'
              onClick={() => handleModal(data.id)}>
              Delete
            </button>
            <Link href={`/details/${data.id}`}>
              <p className='underline'>

              view
              </p>
            </Link>
          </div>
        ))} 
     
    </main>
  )
}
