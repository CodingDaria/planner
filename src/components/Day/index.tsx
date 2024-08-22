import { useState } from 'react';
import './index.css';
import AddMenu from '../AddMenu';

export default function Day() {
  const [isAddMenuVisible, setAddMenuVisible] = useState(false);

  return (
    <div className="calendar_day">
      <div>Day</div>
      <div>
        <button type="button" onClick={() => setAddMenuVisible(!isAddMenuVisible)}>
          +
        </button>
      </div>
      {isAddMenuVisible && <AddMenu />}
    </div>
  );
}
