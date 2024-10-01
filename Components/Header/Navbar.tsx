import React, { useState } from 'react'
import { Button } from "@/Components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import Image from 'next/image'
import Link from 'next/link'
import avatar from '@/Asset/27470334_7309681.jpg'



const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)


  return (
    <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
            <Image
                src={avatar}
                alt="Logo de la empresa"
                width={40}
                height={40}
                className="mr-4"
            />
              <h1 className="text-2xl font-bold">Mi Empresa</h1>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li> 
                  <Button variant="link" className="text-primary-foreground p-0">
                    <Link href="/">Inicio</Link>
                  </Button> 
                </li>
                <li>

                  <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="link" className="text-primary-foreground p-0">
                        Configuración
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link href="/configuracion/Empresas">Empresas</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/configuracion/Plantillas_Perfiles">Plantillas de perfiles</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/configuracion/Usuarios_Comprartidos">Usuarios Compartidos</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </ul>
            </nav>
          </div>
  )
}

export default Navbar
