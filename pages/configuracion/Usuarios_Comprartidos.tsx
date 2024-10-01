import React from 'react'
import Footer from '@/Components/Header/Footer'
import Navbar from '@/Components/Header/Navbar'

const Usuarios_Comprartidos = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <header className="bg-primary text-primary-foreground p-4">
            <Navbar />
        </header>
        <main className="flex-grow container mx-auto p-4  md:flex-row">
          {/* <Main_Home/> */}
        </main>

        <Footer />
    </div>
  )
}

export default Usuarios_Comprartidos
