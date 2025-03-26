import { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';

function App() {
  const [theme, setTheme] = useState('Alucard');

  return (
    <>
      <NavBar />
    </>
  )
}

export default App
