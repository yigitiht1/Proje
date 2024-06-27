import React, { useState, useEffect } from 'react';
import './Day.css'; 

const Day = () => {
  const [reminders, setReminders] = useState([]);
  const [reminderText, setReminderText] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [reminderTime, setReminderTime] = useState('');

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
    setReminderDate(e.target.value);
  };

  const handleReminderTimeChange = (e) => {
    setReminderTime(e.target.value);
  };

  const handleAddReminder = () => {
    if (!reminderText.trim() || !reminderDate || !reminderTime) {
      alert('Lütfen hatırlatma metni, tarih ve saat giriniz.');
      return;
    }

    const newReminder = {
      id: new Date().getTime(),
      text: reminderText,
      date: reminderDate,
      time: reminderTime,
    };

    setReminders([...reminders, newReminder]); 
    setReminderText('');
    setReminderDate('');
    setReminderTime('');
  };

  const handleDeleteReminder = (id) => {
    const updatedReminders = reminders.filter(reminder => reminder.id !== id);
    setReminders(updatedReminders);
  };

  const checkRemindersForToday = () => {
    const today = new Date().toLocaleString(); 
    const todayReminders = reminders.filter(reminder => reminder.date === today);

    if (todayReminders.length > 0) {
      console.log(`Bugün için hatırlatmalar:`, todayReminders);
      
    }
  };

  return (
    <div className="reminder-app">
      <h1>Hatırlatmalar</h1>
      <div className="reminder-form">
        <label>Hatırlatma Metni:</label>
        <input type="text" value={reminderText} onChange={handleReminderTextChange} placeholder="Bir hatırlatma metni girin..." />
        <label>Tarih:</label>
        <input type="date" value={reminderDate} onChange={handleReminderDateChange} />
        <label>Saat:</label>
        <input type="time" value={reminderTime} onChange={handleReminderTimeChange} />
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
                {new Date(reminder.date).toLocaleDateString() === new Date().toLocaleDateString() && (
                  <div>
                    <p><strong>Metin:</strong> {reminder.text}</p>
                    <p><strong>Tarih:</strong> {reminder.date}</p>
                    <p><strong>Saat:</strong> {reminder.time}</p>
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

export default Day;
