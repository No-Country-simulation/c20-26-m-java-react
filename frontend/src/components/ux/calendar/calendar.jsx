import './calendar.scss';
import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/es'; 

export default function Calendar() {
  const [dates, setDates] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(moment()); 

  useEffect(() => {
    moment.locale('es'); 

    const startDate = currentMonth.clone().startOf('month'); 
    const endDate = currentMonth.clone().endOf('month'); 
    const days = [];

    let day = startDate.clone();

    while (day.isBefore(endDate) || day.isSame(endDate)) {
      days.push({
        day: day.date(),
        weekDay: day.format('ddd').replace('.', ''), 
        isCurrentDay: day.isSame(moment(), 'day'),
      });
      day.add(1, 'days');
    };

    setDates(days); 
  }, [currentMonth]);

  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => prevMonth.clone().subtract(1, 'months'));
  };

  const goToNextMonth = () => {
    setCurrentMonth(nextMonth => nextMonth.clone().add(1, 'months'));
  };

  return (
    <div className="calendar-container">
        <div className="calendar-header">
            <i className="bi bi-caret-left-fill" onClick={goToPreviousMonth}></i>
            <h4 className="calendar-month">{currentMonth.format('MMMM YYYY')}</h4> {/* Month in Spanish */}
            <i className="bi bi-caret-right-fill" onClick={goToNextMonth}></i>
        </div>

      <div className="calendar-grid">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`calendar-day ${date.isCurrentDay ? 'current-day' : ''}`}
          >
            <span>{date.day}</span>
          </div>
        ))}
      </div>

      <button className="add-event-btn">Add Event</button>
    </div>
  );
}
