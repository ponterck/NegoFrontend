import React from 'react'
import { motion } from 'framer-motion';
import LoginForm from '@/Feature/Login/Login_Form'


const login = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <LoginForm />

    </motion.div>
  )
}

export default login
