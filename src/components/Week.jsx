import React, { useState, useEffect } from 'react';
import './Day.css';

const Week = () => {
  const [reminders, setReminders] = useState([]);
  const [reminderText, setReminderText] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      checkRemindersForToday();
    }, 60000); 

    return () => clearInterval(interval);
  }, []);

  const handleReminderTextChange = (e) => {
    setReminderText(e.target.value);
  };

  const handleReminderDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setReminderDate(selectedDate.toLocaleDateString());
    setEndDate(new Date(selectedDate.getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString());
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleAddReminder = () => {
    if (!reminderText.trim() || !reminderDate) {
      alert('Lütfen hatırlatma metni ve tarih giriniz.');
      return;
    }

    const newReminder = {
      id: new Date().getTime(),
      text: reminderText,
      date: reminderDate,
    };

    setReminders([...reminders, newReminder]);
    setReminderText('');
    setReminderDate('');
    setStartDate('');
    setEndDate('');
  };

  const handleDeleteReminder = (id) => {
    const updatedReminders = reminders.filter(reminder => reminder.id !== id);
    setReminders(updatedReminders);
  };

  const checkRemindersForToday = () => {
    const today = new Date().toLocaleDateString();
    const todayReminders = reminders.filter(reminder => reminder.date === today);

    if (todayReminders.length > 0) {
      console.log(`Bugün için hatırlatmalar:`, todayReminders);
     
    }
  };

  return (
    <div className="reminder-app">
      <h1>Hatırlatmalar</h1>
      <div className="date-range">
        <label>Başlangıç Tarihi:</label>
        <input type="date" value={startDate} onChange={handleStartDateChange} />
        <label>Bitiş Tarihi:</label>
        <input type="date" value={endDate} onChange={handleEndDateChange} />
      </div>
      <div className="reminder-form">
        <label>Hatırlatma Metni:</label>
        <input type="text" value={reminderText} onChange={handleReminderTextChange} placeholder="Bir hatırlatma metni girin..." />
        <label>Tarih:</label>
        <input type="date" value={reminderDate} onChange={handleReminderDateChange} />
        <button onClick={handleAddReminder}>Hatırlatma Ekle</button>
      </div>
      <div className="reminder-list">
        <h2>Bugün İçin Hatırlatmalar</h2>
        {reminders.length === 0 ? (
          <p>Henüz hatırlatma eklenmemiş.</p>
        ) : (
          <ul>
            {reminders.map(reminder => (
              <li key={reminder.id} className="reminder-item">
                {reminder.date === new Date().toLocaleDateString() && (
                  <div>
                    <p><strong>Metin:</strong> {reminder.text}</p>
                    <p><strong>Tarih:</strong> {reminder.date}</p>
                    <button onClick={() => handleDeleteReminder(reminder.id)}>Hatırlatmayı Sil</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Week;
