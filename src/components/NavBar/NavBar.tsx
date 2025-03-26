import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <h1>Comic Dialog</h1>
      <h1>Date</h1>
      <h1>Weather</h1>

      <label htmlFor="themes">Theme</label>
      <select name='themes' id='themes-dropwdown'>
        <option value="Kokiri">Kokiri</option>
        <option value="Solaire">Solaire</option>
        <option value="Alucard">Alucard</option>
      </select>
    </nav>
  )
}
