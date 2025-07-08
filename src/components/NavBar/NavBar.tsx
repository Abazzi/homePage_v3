import { useEffect, useMemo, useState } from 'react';
import { NavBarProps } from '../../types';
import './NavBar.css';

export default function NavBar({ props }: { props: NavBarProps }) {

  const [weather, setWeather] = useState('');

  // MM-DD-YYY
  const currentDay = useMemo(() => {
    const date = new Date();
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getDay(),
    );
  }, [])

  const dateString = currentDay.toLocaleDateString('en-US', {
    year: 'numeric',
    day: 'numeric',
    month: 'long',
  });

  async function fetchWeather(date: Date): Promise<void> {
    const url =
      'https://api.open-meteo.com/v1/forecast?latitude=42.293&longitude=-82.9&current=temperature_2m&hourly=temperature_2m&timezone=auto&forecast_days=1';
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(`${data.hourly.temperature_2m[date.getHours()]}`)
    } catch (error) {
      throw new Error(`Error fetching data: ${error}`);
    }
  }

  useEffect(() => {
    fetchWeather(currentDay);
  }, [currentDay])


  return (
    <nav data-theme={props.theme} className="nav-bar">
      <h1>Comic Dialog</h1>
      <h1>{dateString}</h1>
      <h1>{weather} °C</h1>

      <select
        name='themes'
        id='themes-dropwdown'
        defaultValue={props.theme}
        onChange={e => props.setTheme(e.target.value)}
      >
        <option value="gaeas">Gaea's Cradle</option>
        <option value="solaire">Solaire</option>
        <option value="alucard">Alucard</option>
        <option value="hhkb">HHKB</option>
      </select>
    </nav>
  )
}
