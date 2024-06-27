import React from 'react';
import "./HomePageContent.css";

const Card = () => {
  return (
    <div className="card">
    <div className="card-title">
      <h5 className="card-title">Planlama</h5>
      <p className="card-text">Günlük, Aylık ve Yıllık planlarınızı şimdiden yapın.</p>
      <a href="#" className="card-content">Daha Fazla</a>
      
    </div>
  
    <div className="card-title">
      <h5 className="card-title">Hatırlatmalar</h5>
      <p className="card-text">Hatırlatıcıları Kullanın: Önemli toplantıları, randevuları veya diğer görevleri hatırlatmak için uygulamanızın hatırlatma özelliğini kullanın.</p>
      <a href="#" className="card-content">Daha Fazla </a>
      
    </div>
     
    <div className="card-title">
      <h5 className="card-title">Görevler</h5>
      <p className="card-text">Günlük işlerinizi düzenli tutmak için buradayım! Görevlerinizi planlamak ve tamamlamak için bu alanda notlarınızı ekleyebilirsiniz.</p>
      <a href="#" className="card-content">Daha Fazla</a>
    </div>
  
  </div>
  
  )  
}

export default Card;
