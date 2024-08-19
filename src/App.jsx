import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ItemsListContainer } from './components/ItemList Container/ItemListContainer'
import { NavBar } from './components/ItemList Container/NavBar/NavBar'


function App() {
return (
    <div className='App'>
      <NavBar />
      <ItemsListContainer greeting={'Bienvenidos!'} />
      
    </div>
  );
}

export default App;
