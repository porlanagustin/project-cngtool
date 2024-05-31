import CalendarCommon from "../../common/calendar/Calendar";
import "./CalendarEvents.css";

const CalendarEvents = () => {
  return (
    <div className="calendarContainer">
      <CalendarCommon></CalendarCommon>
      <div className="containerForm">
        <h1>Agregar un evento</h1>
        <form className="formStyles">
          <label htmlFor="startDate">Fecha de Inicio:</label>
          <input type="date" id="startDate" />

          <label htmlFor="endDate">Fecha de Finalización:</label>
          <input type="date" id="endDate" />

          <label htmlFor="titleEvent"></label>
          <input type="text" />

          <input type="submit" value="Submit" className="formButton" />
        </form>
      </div>
    </div>
  );
};

export default CalendarEvents;
