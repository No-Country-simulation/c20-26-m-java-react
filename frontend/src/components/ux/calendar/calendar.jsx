import './calendar.scss';
import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/es'; 

export default function Calendar() {
  const [dates, setDates] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(moment()); 

  const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']; // Días de la semana

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
    <div>
      <div className="calendar-container">
        <div className="calendar-header">
          <i className="bi bi-chevron-left" onClick={goToPreviousMonth}></i>
          <h4 className="calendar-month">{currentMonth.format('MMMM YYYY')}</h4>
          <i className="bi bi-chevron-right" onClick={goToNextMonth}></i>
        </div>

        <div className="calendar-grid">
          {weekDays.map((weekDay, index) => (
            <div key={index} className="calendar-week-day">
              <span>{weekDay}</span>
            </div>
          ))}
          {dates.map((date, index) => (
            <div
              key={index}
              className={`calendar-day ${date.isCurrentDay ? 'current-day' : ''}`}
            >
              <span>{date.day}</span>
          </div>
          ))}
      </div>
      <button className="add-event-btn">Agregar evento</button>
    </div>
  </div>

)}