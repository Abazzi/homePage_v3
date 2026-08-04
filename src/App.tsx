import { useEffect, useState } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Portrait from './components/Portrait/Portrait';
import LinkBoard from './components/LinkBoard/LinkBoard';

function App() {

  /* The theme state will is a string that changes based on the theme dropdown
   * menu in the NavBar Component. The variable 'theme' will be attached to each
   * component as a CSS data type that will update the look of the website on
   * change
   * */



  const [theme, setTheme] = useState('solarie');

  // Wrapper function for fetching the theme in localStorage
  function getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  }

  const localStorageTheme:string | null = getItem('theme');

  useEffect(() => {
    if (localStorageTheme !== null) {
      setTheme(localStorageTheme);
    } else {
      setTheme('solaire');
      localStorage.setItem('theme', 'solarie');
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme])


  /* Link Mode represents the name of the array of links in links.json
 * that is currently being displayed on the page. In v2 the theme and link
 * selections were combined but in v3 you can have any combo of links and
 * themes
 * */
  const LINK_MODES = ['default', 'school'];
  const [linkMode, setLinkMode] = useState('default');

  // Pressing 'w' cycles to the next link mode. Ignored while focus is on
  // an input/select/textarea/contentEditable element so it doesn't fire
  // while the user is typing or interacting with the theme/link dropdowns.
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const isTyping =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      if (isTyping) return;

      if (e.key.toLowerCase() === 'w') {
        setLinkMode(prev => {
          const currentIndex = LINK_MODES.indexOf(prev);
          const nextIndex = (currentIndex + 1) % LINK_MODES.length;
          return LINK_MODES[nextIndex];
        });
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <NavBar props={{ theme: theme, setTheme: setTheme }} />
      <div className="main-container" data-theme={theme}>
        <Portrait props={{ theme: theme, setTheme: setTheme }} />
        <LinkBoard props={{ linkMode: linkMode, theme: theme, setLinkMode: setLinkMode }} />
      </div>
    </>
  )
}

export default App
