import React, { useState } from 'react';

const Iletişim = () => {
  const [ad, setAd] = useState('');
  const [eposta, setEposta] = useState('');
  const [mesaj, setMesaj] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    console.log(`Ad: ${ad}, E-posta: ${eposta}, Mesaj: ${mesaj}`);

    
    alert('Bilgileriniz E-posta Adresinize gönderildi');

 
    setAd('');
    setEposta('');
    setMesaj('');
  };

  return (
    <div>
      <h2>Hesap Bilgilerimi Gönder</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="ad">Adınız:</label>
          <input
            type="text"
            id="ad"
            value={ad}
            onChange={(e) => setAd(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="eposta">E-posta Adresiniz:</label>
          <input
            type="email"
            id="eposta"
            value={eposta}
            onChange={(e) => setEposta(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mesaj">Mesajınız:</label>
          <textarea
            id="mesaj"
            value={mesaj}
            onChange={(e) => setMesaj(e.target.value)}
            required
          />
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Iletişim;
