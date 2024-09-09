import './calendar.scss';
import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/es'; // Importa el locale en español

export default function Calendario() {
  const [fechas, setFechas] = useState([]); // Lista de fechas
  const [mesActual, setMesActual] = useState(moment()); // Estado para controlar el mes actual

  useEffect(() => {
    moment.locale('es'); // Configura moment para usar español

    const fechaInicio = mesActual.clone().startOf('month'); // Primer día del mes actual
    const fechaFin = mesActual.clone().endOf('month'); // Último día del mes actual
    const dias = [];

    let dia = fechaInicio.clone();

    while (dia.isBefore(fechaFin) || dia.isSame(fechaFin)) {
      dias.push({
        dia: dia.date(),
        diaSemana: dia.format('ddd').replace('.', ''), 
        esDiaActual: dia.isSame(moment(), 'day'),
      });
      dia.add(1, 'days');
    }

    setFechas(dias); 
  }, [mesActual]);

  // ir al mes anterior
  const irAlMesAnterior = () => {
    setMesActual(mesAnterior => mesAnterior.clone().subtract(1, 'months'));
  };

  // ir al siguiente mes
  const irAlMesSiguiente = () => {
    setMesActual(mesSiguiente => mesSiguiente.clone().add(1, 'months'));
  };

  return (
    <div className="calendar-container">
        <div className="calendar-header">
            <i className="bi bi-caret-left-fill" onClick={irAlMesAnterior}></i>
            <h4 className="calendar-month">{mesActual.format('MMMM YYYY')}</h4> {/* El mes en español */}
            <i className="bi bi-caret-right-fill" onClick={irAlMesSiguiente}></i>
        </div>

      <div className="calendar-grid">
        {fechas.map((fecha, index) => (
          <div
            key={index}
            className={`calendar-day ${fecha.esDiaActual ? 'current-day' : ''}`}
          >
            <span>{fecha.dia}</span>
          </div>
        ))}
      </div>

      <button className="add-event-btn">Agregar Evento</button>
    </div>
  );
}
