import CustomerContext from '@/app/context/CustomerContext'
import React, { useContext } from 'react'

const Modal = ({ userId, closeAlertModal }) => {

    const { deleteCustomers } = useContext(CustomerContext)

    const closeModal = () => {
        deleteCustomers(userId)
        closeAlertModal(false)
    }

    const cancelDeletion = () => {
        closeAlertModal(false)
    }

    return (
        // <div className='absolute border-solid border-2 border-sky-500 w-full h-full flex items-center justify-center'>

        <div className='p-4 absolute border-solid border-2 w-1/2 rounded-md bg-slate-100 text-black'>
            <h1 className='text-red-600 mb-4'> Confirm!
            </h1>
            <p className='mb-4'>confirm deletion</p>
            <div className='flex items-center justify-end'>
                <button onClick={closeModal} className='bg-black text-white  py-2 px-3 rounded-md'>Delete</button>
                <button onClick={cancelDeletion} className='bg-black text-white ml-4 py-2 px-3 rounded-md'>Cancel</button>
            </div>
        </div>
        // </div>
    )
}

export default Modal