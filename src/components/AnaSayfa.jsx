import React from 'react';
import Navbar from './Navbar';
import Card from './HomePageContent.jsx';
import "./Anasayfa.css";
const AnaSayfa = () => {
  return (
    
   <div className='home'>
     <div className='home'>
     <Navbar /><br></br><br></br>
     <h1 className='home3'>Hayatın yoğun temposunda kayboluyor musunuz? Endişelenmeyin, buradayım! Kişisel planlayıcınız, gününüzü organize etmek için mükemmel bir araç olacak. Görevlerinizi, etkinliklerinizi ve hedeflerinizi yönetmek için tasarlandı.</h1>
     <div className='home'>
     <p>Günlük Planlama: Gününüzü saat saat planlayın.</p><br></br>
     <p>Önemli Tarihler: Önemli tarihleri kaçırmamak için hatırlatıcılar ekleyin.</p><br />
     <p>Hedefler Belirleyin: Ulaşmak istediğiniz hedefleri belirleyin ve adım adım ilerleyin.</p><br />
       <Card />
      </div>
      </div>
    </div>
  );
}

export default AnaSayfa;
