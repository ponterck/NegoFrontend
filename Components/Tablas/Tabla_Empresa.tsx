import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { Button } from "@/Components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/Components/ui/dialog"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/Components/ui/tooltip"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Eye, Pencil, Trash2, Upload, HelpCircle } from 'lucide-react'

const companies = [
    { id: 1, name: "Acme Inc.", avatar: "/placeholder.svg?height=40&width=40", rfc: "ACM123456ABC", address: "123 Main St, City", phone: "555-1234" },
    { id: 2, name: "Globex Corp", avatar: "/placeholder.svg?height=40&width=40", rfc: "GLC789012XYZ", address: "456 Oak Ave, Town", phone: "555-5678" },
    { id: 3, name: "Soylent Corp", avatar: "/placeholder.svg?height=40&width=40", rfc: "SOY345678DEF", address: "789 Pine Rd, Village", phone: "555-9012" },
  ]


const Tabla_Empresa = () => {

    const [viewCompany, setViewCompany] = useState(null)
    const [editCompany, setEditCompany] = useState(null)
    const [deleteCompany, setDeleteCompany] = useState(null)
    const [Add, setAdd] = useState(null)

    const [newCompany, setNewCompany] = useState({
        id: '',
        name: '',
        rfc: '',
        address: '',
        phone: '',
        avatar: '',
      });
    
    const handleAdd = () => {
       
        console.log('Empresa creada:', newCompany);
        setAdd(null); 
    };

    const handleEdit = (company) => {
        setEditCompany({ ...company })
    }
    
    const handleSave = () => {
        
        console.log("Guardando cambios:", editCompany)
        setEditCompany(null)
    }
    
    const handleDelete = () => {
        
        console.log("Eliminando empresa:", deleteCompany)
        setDeleteCompany(null)
    }

  return (

    <TooltipProvider>
      <main className="container mx-auto p-4">
        <div className='flex flex-col md:flex-row w-full p-5 mb-3'>
            <div className='flex justify-start flex-1'>
                <p className='text-3xl font-bold p-2'>Configuracion de Empresas</p>
            </div>
            <div className='flex justify-start flex-1 items-center md:mt-0 mt-2 md:justify-end'>
                <Button onClick={() => setAdd(true)}>
                    Agregar Empresa
                </Button>
            </div>
        </div>
        <hr/>
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="text-center">Avatar</TableHead>
                <TableHead className="text-center">Empresa</TableHead>
                <TableHead className="text-center">Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {companies.map((company) => (
                <TableRow key={company.id}>
                    <TableCell className="flex justify-center">
                    <Avatar>
                        <AvatarImage src={company.avatar} alt={company.name} />
                        <AvatarFallback>{company.name[0]}</AvatarFallback>
                    </Avatar>
                    </TableCell>
                    <TableCell className="text-center">{company.name}</TableCell>
                    <TableCell className="text-center">
                    <div className="flex justify-center space-x-2">
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={() => setViewCompany(company)}>
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">Ver {company.name}</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Ver detalles de la empresa</p>
                        </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={() => handleEdit(company)}>
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Editar {company.name}</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Editar información de la empresa</p>
                        </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={() => setDeleteCompany(company)}>
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Eliminar {company.name}</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Eliminar empresa</p>
                        </TooltipContent>
                        </Tooltip>
                    </div>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>


        {/* Modal de Visualización */}
        <Dialog open={!!viewCompany} onOpenChange={() => setViewCompany(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{viewCompany?.name}</DialogTitle>
            </DialogHeader>
            <div className="flex justify-center my-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={viewCompany?.avatar} alt={viewCompany?.name} />
                <AvatarFallback>{viewCompany?.name[0]}</AvatarFallback>
              </Avatar>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="id">ID</Label>
                <Input id="id" value={viewCompany?.id} readOnly className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" value={viewCompany?.name} readOnly className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="rfc">RFC</Label>
                <Input id="rfc" value={viewCompany?.rfc} readOnly className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="address">Domicilio</Label>
                <Input id="address" value={viewCompany?.address} readOnly className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" value={viewCompany?.phone} readOnly className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="destructive" onClick={() => setViewCompany(null)}>Cerrar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Modal de Edición */}
        <Dialog open={!!editCompany} onOpenChange={() => setEditCompany(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar {editCompany?.name}</DialogTitle>
            </DialogHeader>
            <div className="flex justify-center my-4 relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src={editCompany?.avatar} alt={editCompany?.name} />
                <AvatarFallback>{editCompany?.name[0]}</AvatarFallback>
              </Avatar>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" size="icon" className="absolute bottom-0 right-0">
                    <Upload className="h-4 w-4" />
                    <span className="sr-only">Cambiar imagen</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Cambiar imagen de la empresa</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-id">ID</Label>
                <Input id="edit-id" value={editCompany?.id} readOnly className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name">Nombre</Label>
                <div className="col-span-3 flex items-center">
                  <Input 
                    id="edit-name" 
                    value={editCompany?.name} 
                    onChange={(e) => setEditCompany({...editCompany, name: e.target.value})}
                    className="flex-grow" 
                  />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="ml-2">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Ingrese el nombre legal completo de la empresa</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-rfc">RFC</Label>
                <div className="col-span-3 flex items-center">
                  <Input 
                    id="edit-rfc" 
                    value={editCompany?.rfc} 
                    onChange={(e) => setEditCompany({...editCompany, rfc: e.target.value})}
                    className="flex-grow" 
                  />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="ml-2">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Ingrese el Registro Federal de Contribuyentes (RFC) de la empresa</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-address">Domicilio</Label>
                <Input 
                  id="edit-address" 
                  value={editCompany?.address} 
                  onChange={(e) => setEditCompany({...editCompany, address: e.target.value})}
                  className="col-span-3" 
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-phone">Teléfono</Label>
                <Input 
                  id="edit-phone" 
                  value={editCompany?.phone} 
                  onChange={(e) => setEditCompany({...editCompany, phone: e.target.value})}
                  className="col-span-3" 
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="secondary" onClick={() => setEditCompany(null)}>Cancelar</Button>
              <Button onClick={handleSave}>Guardar cambios</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Modal de Eliminación */}
        <Dialog open={!!deleteCompany} onOpenChange={() => setDeleteCompany(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirmar eliminación</DialogTitle>
            </DialogHeader>
            <p>¿Confirma que desea eliminar la empresa &quot;{deleteCompany?.name}&quot;?</p>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDeleteCompany(null)}>Cancelar</Button>
              <Button variant="destructive" onClick={handleDelete}>Aceptar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Agregar nueva empresa open={!!editCompany} onOpenChange={() => setEditCompany(null)} */}
        <Dialog open={!!Add} onOpenChange={() => setAdd(null)}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Crea una nueva empresa</DialogTitle>
                </DialogHeader>
                <div className="flex justify-center my-4 relative">
                <Avatar className="h-24 w-24">
                    <AvatarImage src={newCompany.avatar} alt={newCompany.name} />
                    <AvatarFallback>{newCompany.name ? newCompany.name[0] : 'N'}</AvatarFallback>
                </Avatar>
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Button variant="secondary" size="icon" className="absolute bottom-0 right-0">
                        <Upload className="h-4 w-4" />
                        <span className="sr-only">Agregar imagen</span>
                    </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                    <p>Agrega una imagen de la empresa</p>
                    </TooltipContent>
                </Tooltip>
                </div>
                <div className="grid gap-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="new-id">ID</Label>
                    <Input
                    id="new-id"
                    value={newCompany.id}
                    onChange={(e) => setNewCompany({ ...newCompany, id: e.target.value })}
                    className="flex-grow"
                    readOnly
                    />
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="ml-2">
                            <HelpCircle className="h-4 w-4" />
                        </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                        <p>No es requerido ingresar el ID</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="new-name">Nombre</Label>
                    <div className="col-span-3 flex items-center">
                    <Input
                        id="new-name"
                        value={newCompany.name}
                        onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                        className="flex-grow"
                    />
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="ml-2">
                            <HelpCircle className="h-4 w-4" />
                        </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                        <p>Ingrese el nombre legal completo de la empresa</p>
                        </TooltipContent>
                    </Tooltip>
                    </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="new-rfc">RFC</Label>
                    <div className="col-span-3 flex items-center">
                    <Input
                        id="new-rfc"
                        value={newCompany.rfc}
                        onChange={(e) => setNewCompany({ ...newCompany, rfc: e.target.value })}
                        className="flex-grow"
                    />
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="ml-2">
                            <HelpCircle className="h-4 w-4" />
                        </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                        <p>Ingrese el Registro Federal de Contribuyentes (RFC) de la empresa</p>
                        </TooltipContent>
                    </Tooltip>
                    </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="new-address">Domicilio</Label>
                    <Input
                    id="new-address"
                    value={newCompany.address}
                    onChange={(e) => setNewCompany({ ...newCompany, address: e.target.value })}
                    className="col-span-3"
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="new-phone">Teléfono</Label>
                    <Input
                    id="new-phone"
                    value={newCompany.phone}
                    onChange={(e) => setNewCompany({ ...newCompany, phone: e.target.value })}
                    className="col-span-3"
                    />
                </div>
                </div>
                <DialogFooter>
                <Button variant="secondary" onClick={() => setAdd(false)}>
                    Cancelar
                </Button>
                <Button onClick={handleAdd}>Guardar Empresa</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

      </main>
    </TooltipProvider>
      
    
  )
}

export default Tabla_Empresa
