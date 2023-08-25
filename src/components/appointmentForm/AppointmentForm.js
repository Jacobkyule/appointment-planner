import React, { useMemo }from "react";
import { ContactPicker } from '../../components/contactPicker/ContactPicker';
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);
  return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name
    <input
      name="name"
      id="name"
      value={name}
      onChange={e => setTitle(e.target.value)}
      type="text"
      placeholder="Enter Appointment Name"
      required
    />
    </label>
    <br/>
    <label htmlFor="date">Date
    <input
      name="date"
      id="date"
      value={date}
      onChange={e => setDate(e.target.value)}
      type="date"
      min={getTodayString}
      required
    />
    </label>
    <br/>
    <label htmlFor="time">Time
    <input
      name="time"
      id="time"
      value={time}
      onChange={e => setTime(e.target.value)}
      type="time"
      required
    />
    </label>
    <br/>
    <label htmlFor="contacts">Select Contact
    <ContactPicker
    id="contacts"
    name="contacts"
    value={contact} 
    contacts={contactNames}
    onChange={e => setContact(e.target.value)}
    />
    </label>
    <br/>
    <div className="button-container">
    <input type="submit" value="Submit" />
    </div>
    </form>
    </>
  );
};
