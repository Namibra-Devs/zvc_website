import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow w-full relative">
        <div className="w-full">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout