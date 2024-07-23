import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AuthPage from './pages/AuthPage/Authpage';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Home from './components/Home/Home'; 

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <Routes> 
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/auth" element={<AuthPage user={user} setUser={setUser} />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password/:token" element={<ResetPassword user={user} setUser={setUser} />} />
          <Route path="/profile/:userId" element={<ProfilePage user={user} onLogout={handleLogout} />} />
      </Routes>
    </div>
  );
}
