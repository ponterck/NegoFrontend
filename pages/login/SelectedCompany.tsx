import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/Components/ui/button"
import avatar from '@/Asset/27470334_7309681.jpg'
import avatar2 from '@/Asset/9434937.jpg'
import ProtectedRoute from '@/Components/ProtectedRoute';

const avatars = [
    { src: avatar.src, name: "Empresa 1" },
    { src: avatar2.src, name: "Empresa 2" },
  ]

const SelectedCompany = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const router = useRouter()

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % avatars.length)
    }
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + avatars.length) % avatars.length)
    }

    const handleSelectCompany = () => {
      router.push('/')
    }
  
    return (
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <ProtectedRoute>
        <div className="flex items-center justify-center min-h-screen bg-background p-4">
          <main className="text-center w-full max-w-md">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">Bienvenido selecciona tu empresa</h1>
            <div className="relative w-full">
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Anterior</span>
              </Button>
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out" 
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {avatars.map((avatar, index) => (
                    <div key={index} className="w-full flex-shrink-0 flex flex-col items-center">
                      <Avatar className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
                        <AvatarImage src={avatar.src} alt={`Avatar de ${avatar.name}`} />
                        <AvatarFallback>{avatar.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <p className="text-lg font-medium mt-4">{avatar.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Siguiente</span>
              </Button>
            </div>
            <div>
            <Button 
                variant="default"
                className='mt-4'
                onClick={handleSelectCompany}
              >
                Aceptar
              </Button>
            </div>
          </main>
        </div>
      </ProtectedRoute>
      
    </motion.div>
      
    )
  }

export default SelectedCompany
