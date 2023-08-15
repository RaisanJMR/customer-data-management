'use client'
import { createContext, useState } from 'react'
import customers from '../data'

const CustomerContext = createContext()

export const CustomerProvider = ({ children }) => {
  const [customer, setCustomer] = useState(customers)


  // Delete Customer
  const deleteCustomers = (id) => {
    const updatedCustomers = customer.filter((data) => data.id !== id)
    setCustomer(updatedCustomers)
  }

  // Add Customer
  const addCustomer = (customerData) => {
    setCustomer((prevState) => [...prevState, customerData])
  }

  // Edit Customer
  const editCustomer = (updatedCustomer) => {
    setCustomer((prevState) =>
      prevState.map((data) => {
        if (data.id === updatedCustomer.id) {
          return updatedCustomer
        } else {
          return data
        }
      })
    )
  }

  return (
    <CustomerContext.Provider
      value={{ customer, deleteCustomers, addCustomer, editCustomer }}>
      {children}
    </CustomerContext.Provider>
  )
}

export default CustomerContext
