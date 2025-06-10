import { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Portrait from './components/Portrait/Portrait';

function App() {

  /* The theme state will is a string that changes based on the theme dropdown
   * menu in the NavBar Component. The variable 'theme' will be attached to each
   * component as a CSS data type that will update the look of the website on
   * change
   * */
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
      <div className="main-container">
        <Portrait props={{ theme: theme, setTheme: setTheme }} />
      </div>
    </>
  )
}

export default App
