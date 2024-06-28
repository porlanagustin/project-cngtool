import React from "react";
import CalendarCommon from "../../common/calendar/Calendar";
import "./CalendarEvents.css";

const CalendarEvents = () => {
  return (
    <div className="calendar-events-container">
      <div className="calendar-container">
        <CalendarCommon />
      </div>
      <div className="form-container">
        <h1>Agregar un evento</h1>
        <form className="event-form">
          <div className="form-group">
            <label htmlFor="startDate">Fecha de Inicio:</label>
            <input type="date" id="startDate" />
          </div>

          <div className="form-group">
            <label htmlFor="endDate">Fecha de Finalización:</label>
            <input type="date" id="endDate" />
          </div>

          <div className="form-group">
            <label htmlFor="titleEvent">Título del Evento:</label>
            <input type="text" id="titleEvent" />
          </div>

          <input type="submit" value="Submit" className="form-button" />
        </form>
      </div>
    </div>
  );
};

export default CalendarEvents;
