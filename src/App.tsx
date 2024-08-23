import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Day from './components/Day';
import dayjs from 'dayjs';
import { Weekdays, weekdays } from './constants';
import { IDay } from './types';

function App() {
  const [count, setCount] = useState(0);
  const [days, setDays] = useState<IDay[]>([]);

  const arr = new Array(14).fill(null).map((_, i) => i + 1);

  useEffect(() => {
    const today = dayjs();
    const dayOfWeek = today.day();

    const firstDay = dayjs().date(1);
    const firstDayOfWeek = firstDay.day();
    // const offset = Weekdays[firstDayOfWeek];

    const daysInMonth = today.daysInMonth();

    const days1 = new Array(daysInMonth).fill(null).map((_, idx) => {
      const date = dayjs().date(idx + 1);
      return {
        date: idx + 1,
        day: date.day(),
        name: date.format('dddd'),
        formattedDate: date.format('YYYY/MM/DD'),
        obj: date,
      };
    });
    setDays(days1);
    console.log(days1);
  }, []);

  return (
    <>
      <h2>{dayjs().format('MMMM')}</h2>
      <div className="calendar_container">
        {days.map((day) => (
          <Day key={day.formattedDate} day={day} />
        ))}
      </div>
    </>
  );
}

export default App;
