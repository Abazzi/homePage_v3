import { useState } from 'react';
import linkData from './assets/links.json';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Portrait from './components/Portrait/Portrait';
import { ProgrammingLinkGroups, DefaultLinkGroups } from './types';
import Link from './components/Link/Link';

function App() {

  /* The theme state will is a string that changes based on the theme dropdown
   * menu in the NavBar Component. The variable 'theme' will be attached to each
   * component as a CSS data type that will update the look of the website on
   * change
   * */
  const [theme, setTheme] = useState('alucard');


  const ProgrammingLinks: ProgrammingLinkGroups = linkData.programming;
  const DefaultLinks: DefaultLinkGroups = linkData.default;

  console.log(ProgrammingLinks.daily);
  console.log(DefaultLinks.daily);
  /* Link Mode represents the name of the array of links in links.json
 * that is currently being displayed on the page. In v2 the theme and link
 * selections were combined but in v3 you can have any combo of links and
 * themes
 * */
  const [linkMode, setLinkMode] = useState('default');
  console.log(linkData.programming.daily[0]);

  return (
    <>
      <NavBar props={{ theme: theme, setTheme: setTheme }} />
      <div className="main-container">
        <Portrait props={{ theme: theme, setTheme: setTheme }} />
        <Link props={{ name: DefaultLinks.daily[0].name, url: DefaultLinks.daily[0].url }} />
      </div>
    </>
  )
}

export default App
