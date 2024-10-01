import React from 'react'
import Footer from '@/Components/Header/Footer'
import Navbar from '@/Components/Header/Navbar'
import Tabla_Empresa from '@/Components/Tablas/Tabla_Empresa'


const Empresas = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <header className="bg-primary text-primary-foreground p-4">
            <Navbar Titulo='Gestion de Empresas'/>
        </header>
        <main className="flex-grow container mx-auto p-4  md:flex-row bg-[#f8f8f8] rounded-md shadow-lg mt-5 mb-5">
          <Tabla_Empresa/>
        </main>

        <Footer />
    </div>
  )
}

export default Empresas
