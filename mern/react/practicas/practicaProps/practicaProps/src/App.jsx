import { useState } from 'react'
import TarjetaProducto from './components/Tarjeta'
import './App.css'

function App() {
  

  return (
    <div className="contenedor-tarjeta">
      <TarjetaProducto nombre="Laptop" precio="1500" descripcion="Una potente Laptop para trabajar y jugar" stock = {true} />
      <TarjetaProducto nombre="Smartphone" precio="800" descripcion="Un smartphone de última generación" stock = {false} />
      <TarjetaProducto nombre="Auriculares" precio="200" descripcion="Auricurales con cancelación de ruido" stock = {true} />
      <TarjetaProducto nombre="Monitor" precio="300" descripcion="Monitor 4K para una experiencia visual" stock = {true} />
    </div>
  )
}

export default App
