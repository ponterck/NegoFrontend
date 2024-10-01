import React, { useState } from 'react'
import { motion } from 'framer-motion';
import ProtectedRoute from '@/Components/ProtectedRoute';
import Navbar from '@/Components/Header/Navbar';
import Main_Home from '@/Feature/Home/Main_Home';
import Footer from '@/Components/Header/Footer'



export default function Home() {

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <header className="bg-primary text-primary-foreground p-4">
            <Navbar Titulo='Nombre de la Empresa'/>
        </header>

        <main className="flex-grow container mx-auto p-4  md:flex-row">
          <Main_Home/>
        </main>

        <Footer />
      </div>
    </ProtectedRoute>
  </motion.div>



      
  );
}
