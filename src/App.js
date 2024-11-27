import React, { useState } from "react";
import Calendar from "./Calendar";
import EventModal from "./EventModal";
import "./index.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setModalOpen(true);
  };

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Event Calendar</h1>
      <Calendar events={events} onDateClick={handleDateClick} />
      {modalOpen && (
        <EventModal
          selectedDate={selectedDate}
          onClose={() => setModalOpen(false)}
          onAddEvent={addEvent}
        />
      )}
    </div>
  );
};

export default App;
