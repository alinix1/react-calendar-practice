import './App.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [dateState, setDateState] = useState(new Date());

  const changeDate = (event) => {
    setDateState(event);
  };

  return (
    <>
      <Calendar value={dateState} onChange={changeDate} />
      <p>
        Current selected date is{' '}
        <b>{moment(dateState).format('MMMM Do YYYY')}</b>
      </p>
    </>
  );
}

export default App;
