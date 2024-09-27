import React from "react";
import { motion } from 'framer-motion';
import ProtectedRoute from "@/Components/ProtectedRoute";
import { Button } from "@/Components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    <ProtectedRoute>
      <h1>Bienvenido a la Página Principal</h1>
      <Button>
        <Link href='/Compras'>Compras</Link>
      </Button>
    </ProtectedRoute>
  </motion.div>



      
  );
}
