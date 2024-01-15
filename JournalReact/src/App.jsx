import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Card from './Card'
import Data from './Data'

function App() {
  let cards = Data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <>
      <Header /> 
      {cards}
    </>
  )
}

export default App
