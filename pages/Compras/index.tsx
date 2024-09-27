import React from 'react'
import { motion } from 'framer-motion';
import ProtectedRoute from '@/Components/ProtectedRoute'
import View_Proveedores from '@/Feature/Compras/Proveedores/View_Proveedores'


const index = () => {
  return (
    <ProtectedRoute>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
      <div className='flex justify-center'>
        <View_Proveedores/>
      </div>
      </motion.div>
      
    </ProtectedRoute>

  )
}

export default index
