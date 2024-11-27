import React, { useState } from "react";

const EventModal = ({ selectedDate, onClose, onAddEvent }) => {
  const [eventTitle, setEventTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventTitle.trim()) {
      onAddEvent({ title: eventTitle, start: selectedDate });
      setEventTitle("");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Create Event</h3>
        <form onSubmit={handleSubmit}>
          <label>Event Title:</label>
          <input
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            required
          />
          <br />
          <button type="submit">Add Event</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
