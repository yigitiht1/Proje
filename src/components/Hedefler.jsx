import React, { useState } from 'react';
import { DatePicker, Button, List } from 'antd';

const Hedefler = () => {
  const [hedefler, setHedefler] = useState([]);
  const [tamamlananlar, setTamamlananlar] = useState([]);

  const [hedefText, setHedefText] = useState('');
  const [hedefTarih, setHedefTarih] = useState(null);

  const handleHedefEkle = () => {
    if (hedefText && hedefTarih) {
      const yeniHedef = {
        metin: hedefText,
        tarih: hedefTarih,
      };
      setHedefler([...hedefler, yeniHedef]);
      setHedefText('');
      setHedefTarih(null);
    } else {
      alert('Lütfen hedef metni ve tarihini giriniz.');
    }
  };

  const handleTamamlaClick = (index) => {
    const tamamlananHedef = hedefler[index];
    setTamamlananlar([...tamamlananlar, tamamlananHedef]);
    const yeniHedefler = hedefler.filter((_, idx) => idx !== index);
    setHedefler(yeniHedefler);
  };

  const handleXTikla = (index) => {
    const silinecekHedef = hedefler[index];
    const yeniHedefler = hedefler.filter((_, idx) => idx !== index);
    setHedefler(yeniHedefler);
    alert(`"${silinecekHedef.metin}" hedefi silindi.`);
  };

  const handleDateChange = (date, dateString) => {
    setHedefTarih(dateString); 
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Hedef Yönetimi</h2>
      <label>
        Hedef Metni:
        <input
          type="text"
          value={hedefText}
          onChange={(e) => setHedefText(e.target.value)}
        />
      </label>
      <br />
      <label>
        Hedef Tarihi:
        <DatePicker
          onChange={handleDateChange}
        />
      </label>
      <br />
      <Button type="primary" onClick={handleHedefEkle}>
        Hedefi Ekle
      </Button>
      <br />
      <br />
      <h3>Tamamlanmamış Hedefler</h3>
      <List
        bordered
        dataSource={hedefler}
        renderItem={(item, index) => (
          <List.Item>
            {item.metin} - {item.tarih}
            <Button type="primary" onClick={() => handleTamamlaClick(index)}>
              Tamamlandı
            </Button>
            <Button type="danger" onClick={() => handleXTikla(index)}>
              X
            </Button>
          </List.Item>
        )}
      />
      <br />
      <h3>Tamamlanan Hedefler</h3>
      <List
        bordered
        dataSource={tamamlananlar}
        renderItem={(item) => (
          <List.Item>
            {item.metin} - {item.tarih}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Hedefler;
