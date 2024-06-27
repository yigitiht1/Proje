import React from 'react';

const Logout = () => {

    const handleLogout = () => {
        
        window.location.href = '/login'; 
    };

    return (
        <button onClick={handleLogout}>Çıkış Yap</button>
    );
};

export default Logout;
