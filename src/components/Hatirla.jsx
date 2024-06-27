import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Hatirla.css';

const Hatirla = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [reminder, setReminder] = useState('');
  const [reminderList, setReminderList] = useState([]);
  const [notification, setNotification] = useState('');


  useEffect(() => {
    const savedReminders = localStorage.getItem('reminderList');
    if (savedReminders) {
      setReminderList(JSON.parse(savedReminders));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('reminderList', JSON.stringify(reminderList));
  }, [reminderList]);

  
  const [dateReminders, setDateReminders] = useState({});

  const handleDateChange = (date) => {
    setSelectedDates(date);
   
    setDateReminders({});
  };

  const handleReminderChange = (e) => {
    setReminder(e.target.value);
  };

  const handleAddReminder = () => {
    if (selectedDates.length === 0 || !reminder.trim()) {
      alert('Lütfen tarih ve hatırlatma metnini giriniz.');
      return;
    }

    const newReminder = {
      id: new Date().getTime(),
      dates: selectedDates.map(date => date.toISOString()), 
      reminder,
    };

    setReminderList([...reminderList, newReminder]);


    selectedDates.forEach(date => {
      const formattedDate = date.toISOString().split('T')[0]; 
      setDateReminders(prevState => ({
        ...prevState,
        [formattedDate]: reminder
      }));
    });

    setSelectedDates([]);
    setReminder('');


    setNotification(`Hatırlatma başarıyla eklendi: "${reminder}"`);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const handleDeleteReminder = (id) => {
    const updatedReminderList = reminderList.filter(item => item.id !== id);
    setReminderList(updatedReminderList);

 
    reminderList.forEach(item => {
      item.dates.forEach(date => {
        const formattedDate = date.split('T')[0]; 
        setDateReminders(prevState => {
          if (prevState[formattedDate]) {
            delete prevState[formattedDate];
          }
          return { ...prevState };
        });
      });
    });
  };

  
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = date.toISOString().split('T')[0]; 
      if (dateReminders[formattedDate]) {
        return (
          <p className="tile-content">{dateReminders[formattedDate]}</p>
        );
      }
    }
    return null;
  };

  return (
    <div className="reminder-app" style={{ paddingTop: '20px' }}>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          selectRange
          value={selectedDates}
          tileContent={tileContent}
          className="custom-calendar"
        />
      </div>
      <div className="reminder-content">
   
        {notification && <div className="notification">{notification}</div>}
        <div className="reminder-form">
          <label>Seçilen Tarihler:</label>
          <ul>
            {selectedDates.map((date, index) => (
              <li key={index}>{new Intl.DateTimeFormat('tr-TR', { dateStyle: 'full' }).format(new Date(date))}</li>
            ))}
          </ul>
          <label>Hatırlatma:</label>
          <textarea value={reminder} onChange={handleReminderChange} placeholder="Hatırlatma metni giriniz..." />
          <button onClick={handleAddReminder}>Hatırlatma Ekle</button>
        </div>
        <div className="reminder-list">
          <h2>Eklenen Hatırlatmalar</h2>
          <ul>
            {reminderList.map(item => (
              <li key={item.id}>
                <p><strong>Tarihler:</strong> {item.dates.map(date => new Intl.DateTimeFormat('tr-TR', { dateStyle: 'full' }).format(new Date(date))).join(', ')}</p>
                <p><strong>Hatırlatma Notu:</strong> {item.reminder}</p>
                <button onClick={() => handleDeleteReminder(item.id)}>Hatırlatmayı Sil</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hatirla;
