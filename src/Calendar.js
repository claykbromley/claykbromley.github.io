import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = ({ events, onDateClick }) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      dateClick={(info) => onDateClick(info.dateStr)}
    />
  );
};

export default Calendar;
