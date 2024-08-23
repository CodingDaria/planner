import { useState } from 'react';
import './index.css';
import AddMenu from '../AddMenu';
import { IDay } from '../../types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';

export default function Day({ day }: { day: IDay }) {
  const [isAddMenuVisible, setAddMenuVisible] = useState(false);

  return (
    <Card className="calendar_day" sx={{ gridColumnStart: day.date === 1 ? day.day : 'auto' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '8px' }}>
        <div>{day.date}</div>
      </CardContent>
      <CardActions>
        <button type="button" onClick={() => setAddMenuVisible(!isAddMenuVisible)}>
          +
        </button>
      </CardActions>
      {isAddMenuVisible && <AddMenu />}
    </Card>
  );
}
