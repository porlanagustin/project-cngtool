import "./Calendar.css";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import { useState } from "react";

const CalendarCommon = () => {
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs("2024-03-15T10:00:00").toDate(),
      end: dayjs("2024-03-15T12:00:00").toDate(),
      title: "Lollapalooza Day 1",
    },
    {
      start: dayjs("2024-03-16T12:00:00").toDate(),
      end: dayjs("2024-03-16T14:00:00").toDate(),
      title: "Lollapalooza Day 2",
    },
    {
      start: dayjs("2024-04-05T09:00:00").toDate(),
      end: dayjs("2024-04-05T11:00:00").toDate(),
      title: "Meeting with Team",
    },
    {
      start: dayjs("2024-04-10T14:00:00").toDate(),
      end: dayjs("2024-04-10T16:00:00").toDate(),
      title: "Project Deadline",
    },
    {
      start: dayjs("2024-05-01T00:00:00").toDate(),
      end: dayjs("2024-05-01T23:59:00").toDate(),
      title: "Holiday",
    },
  ];

  const [view, setView] = useState("month");

  return (
    <div className="contenidoGeneralCalendario">
      <div className="calendar-container">
        <h2>Eventos del Calendario</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
          defaultView={view}
          views={["month", "week", "day", "agenda"]}
          onView={(view) => setView(view)}
          style={{ height: "400px" }}
        />
      </div>
    </div>
  );
};

export default CalendarCommon;
