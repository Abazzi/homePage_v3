import { NavBarProps } from '../../types';
import './NavBar.css';

export default function NavBar({ props }: { props: NavBarProps }) {


  async function fetchWeather(date: Date): Promise<string> {
    const url =
      'https://api.open-meteo.com/v1/forecast?latitude=42.293&longitude=-82.9&current=temperature_2m&hourly=temperature_2m&timezone=auto&forecast_days=1';
    const response = await fetch(url);
    const data = await response.json();
    return `${data.hourly.temperature_2m[date.getHours()]}`;
  }

  function handleThemeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setTheme(e.target.value)
  }

  const date = new Date();

  const currentDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getDay(),
  ).toLocaleDateString('en-US', {
    year: 'numeric',
    day: 'numeric',
    month: 'long',
  });

  return (
    <nav>
      <h1>Comic Dialog</h1>
      <h1>{currentDay}</h1>

      <label htmlFor="themes">Theme</label>
      <select
        name='themes'
        id='themes-dropwdown'
        defaultValue='kokiri'
        onChange={e => handleThemeChange(e)}
      >
        <option value="kokiri">Kokiri</option>
        <option value="solaire">Solaire</option>
        <option value="alucard">Alucard</option>
      </select>
    </nav>
  )
}
