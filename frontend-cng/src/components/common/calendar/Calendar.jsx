import "./Calendar.css";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";

const CalendarCommon = () => {
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs("2024-03-15T00:00:00").toDate(),
      end: dayjs("2024-03-16T00:00:00").toDate(),
      title: "Lollapalooza Day 1",
    },
  ];

  return (
    <div className="calendar-container">
      <Calendar localizer={localizer} events={events} />
    </div>
  );
};

export default CalendarCommon;
