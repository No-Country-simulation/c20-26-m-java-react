import './calendar.scss';
import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/es';

export default function Calendar() {
  const [dates, setDates] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(moment());
  const [showModal, setShowModal] = useState(false); 
  const [selectedDate, setSelectedDate] = useState(null); 
  const [events, setEvents] = useState([]); 
  const [eventTitle, setEventTitle] = useState(''); 

  const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  useEffect(() => {
    moment.locale('es');

    const startDate = currentMonth.clone().startOf('month');
    const endDate = currentMonth.clone().endOf('month');
    const days = [];

    let day = startDate.clone();

    while (day.isBefore(endDate) || day.isSame(endDate)) {
      days.push({
        day: day.date(),
        fullDate: day.format('YYYY-MM-DD'),
        weekDay: day.format('ddd').replace('.', ''),
        isCurrentDay: day.isSame(moment(), 'day'),
      });
      day.add(1, 'days');
    }

    setDates(days);
  }, [currentMonth]);

  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => prevMonth.clone().subtract(1, 'months'));
  };

  const goToNextMonth = () => {
    setCurrentMonth(nextMonth => nextMonth.clone().add(1, 'months'));
  };
  
  const handleAddEventClick = (date) => {
    setSelectedDate(date);
    setShowModal(true); 
  };

  const handleSaveEvent = () => {
    if (eventTitle.trim()) {
      setEvents([...events, { date: selectedDate, title: eventTitle }]);
      setShowModal(false); 
      setEventTitle('');
    }
  };

  const getEventsForDate = (date) => {
    return events.filter(event => event.date === date);
  };

  return (
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
            onClick={() => handleAddEventClick(date.fullDate)}
          >
            <span>{date.day}</span>
            {getEventsForDate(date.fullDate).map((event, i) => (
              <div key={i} className="calendar-event">
                {event.title}
              </div>
            ))}
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal" >
          <div className="modal-content">
            <div className='m-2'>
              <h3>Agregar evento para {selectedDate}</h3>
            <form className=''>
              <input
              type="text"
              placeholder="Título del evento"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              className='border-radius m-3 p-2'
            />
            <div>
                <button className='btn border-radius bg-c1' onClick={handleSaveEvent}>Guardar</button>
                <button className='btn border-radius bg-c1' onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
            </form>
            </div>
            
            
          </div>
        </div>
      )}
      <button className="add-event-btn" onClick={() => setShowModal(true)}>
        Agregar evento
      </button>

    </div>

  );
}



export function CardEvent() {
  return(
      <div className="card-event-container mt-3">
          <div className="card bg-c2 border-radius mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-header text-center">Eventos pendientes</div>
              <div className="card-body">

                  <div className="card mb-3 border-radius">
                      <div className="container d-flex flex-row align-items-center">
                          <div className="me-3">
                              <i className="bi bi-person-walking fs-3"></i>
                          </div>
                          <div className="d-flex flex-column">
                              <span className="fw-bold">Maylo</span>
                              <span>Pastor Aleman</span>
                              <span className="text-muted">14/09</span>
                          </div>
                      </div>
                  </div>
                  {/* Segunda tarjeta */}
                  <div className="card mb-3 border-radius">
                      <div className="container d-flex flex-row align-items-center">
                          <div className="me-3">
                              <i className="bi bi-heart-fill fs-3"></i>
                          </div>
                          <div className="d-flex flex-column">
                              <span className="fw-bold">Maylo</span>
                              <span>Pastor Aleman</span>
                              <span className="text-muted">25/09</span>
                          </div>
                      </div>
                  </div>
                  {/* Tercera tarjeta */}
                  <div className="card mb-3 border-radius">
                      <div className="container d-flex flex-row align-items-center">
                          <div className="me-3">
                              <i className="bi bi-clipboard-check-fill fs-3"></i>
                          </div>
                          <div className="d-flex flex-column">
                              <span className="fw-bold">Maylo</span>
                              <span>Pastor Aleman</span>
                              <span className="text-muted">02/10</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}