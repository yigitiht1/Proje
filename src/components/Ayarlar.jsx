import React, { useState } from 'react';
const Ayarlar = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Kullanıcı verileri güncellendi:', userData);
    
  };

  return (
    <div>
      <h2>Gizlilik ve Güvenlik Ayarları</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Ad Soyad:
            <input
              type="text"
              name="fullName"
              value={userData.fullName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            E-posta adresi:
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Telefon numarası:
            <input
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Şifre:
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit">Bilgileri Güncelle</button>
      </form>
    </div>
  );
};

export default Ayarlar;
