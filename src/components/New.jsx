import React, { useState } from 'react';
import { Calendar } from 'antd';
import './New.css'; 

const CalendarComponent = ({ handleDateSelect }) => {
  return (
    <div className="calendar-container">
      <Calendar onSelect={handleDateSelect} className="custom-calendar" />
    </div>
  );
};

const New = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleDateSelect = (value) => {
    setSelectedDate(value.format('DD-MM-YYYY')); 
    console.log('Seçilen Tarih:', value.format('YYYY-MM-DD'));
  };

  const handleAddTask = () => {
    if (!task.trim()) {
      alert('Lütfen bir görev giriniz.');
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      task,
      date: selectedDate, 
    };

    setTasks([...tasks, newTask]);
    setTask('');
    setSelectedDate(null); 
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-app">
      <h1>Görev Yöneticisi</h1>
      <div className="task-form">
        <label>Görev:</label>
        <input type="text" value={task} onChange={handleTaskChange} placeholder="Yapılacak bir görev girin..."/>
        <CalendarComponent handleDateSelect={handleDateSelect} /> 
        <button onClick={handleAddTask}>Görev Ekle</button>
      </div>
      <div className="task-list">
        <h2>Eklenen Görevler:</h2>
        <ul>
          {tasks.map(item => (
            <li key={item.id}>
              <div className="task-item">
                <div>
                  <p><strong>Görev:</strong> {item.task}</p>
                  <p><strong>Tarih:</strong> {item.date}</p>
                </div>
                <button onClick={() => handleDeleteTask(item.id)}>Görevi Sil</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default New;
