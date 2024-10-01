import React from 'react'
import { BarChart, LineChart, PieChart, AreaChart } from 'lucide-react'


const Main_Home = () => {
  return (
    <>
      <section className="md:w-1/3 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Bienvenido</h2>
        <p className="text-xl">¿Qué deseas realizar el día de hoy?</p>
      </section>
      <section className="md:w-full  overflow-y-auto max-h-[calc(100vh-200px)] p-3  bg-pink-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[BarChart, LineChart, PieChart, AreaChart].map((Chart, index) => (
            <div key={index} className="bg-card text-card-foreground p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Gráfica {index + 1}</h3>
                <Chart className="w-full h-48" />
                <p className="mt-2">Descripción de la gráfica {index + 1}</p>
            </div>
            ))}
        </div>
      </section> 
    </>
  )
}

export default Main_Home
