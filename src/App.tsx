import { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';

function App() {
  const [theme, setTheme] = useState('alucard');
  /* Link Mode represents the name of the array of links in links.json
   * that is currently being displayed on the page. In v2 the theme and link
   * selections were combined but in v3 you can have any combo of links and
   * themes
   * */
  const [linkMode, setLinkMode] = useState('default');

  return (
    <>
      <NavBar props={{ theme: theme, setTheme: setTheme }} />
    </>
  )
}

export default App
