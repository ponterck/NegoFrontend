import React from 'react'
import Navbar from '@/Components/Header/Navbar'
import Footer from '@/Components/Header/Footer'

const Plantillas_Perfiles = () => {
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

export default Plantillas_Perfiles
