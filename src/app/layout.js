import { CustomerProvider } from './context/CustomerContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'customer data management application',
  description: 'created by raisan j m',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <CustomerProvider>{children}</CustomerProvider>
      </body>
    </html>
  )
}
