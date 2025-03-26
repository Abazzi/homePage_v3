import { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';

function App() {
  const [theme, setTheme] = useState('alucard');
  const [linkMode, setLinkMode] = useState('default');

  return (
    <>
      <NavBar props={{ theme: theme, setTheme: setTheme }} />
      <h1>{theme}</h1>
    </>
  )
}

export default App
