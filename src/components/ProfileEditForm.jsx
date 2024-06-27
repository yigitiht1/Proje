import React, { useState } from 'react';

const ProfileEditForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Gönderilen veriler:', { username, email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Kullanıcı Adı:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>E-posta:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Şifre:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Kaydet</button>
        </form>
    );
};

export default ProfileEditForm;
