import React, { useState } from 'react';
import { Route, Routes, useLocation, useNavigate  } from 'react-router-dom';
import AuthPage from './pages/AuthPage/Authpage';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Home from './components/Home/Home'; 
import * as apiService from './utilities/api-service';

export default function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    apiService.logOut();
    setUser(null); // Update user state
    navigate('/auth'); // Redirect to login page
  };

  return (
    <div className="App">
      <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage user={user} setUser={setUser} />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password/:token" element={<ResetPassword user={user} setUser={setUser} />} />
          <Route path="/profile/:userId" element={<ProfilePage user={user} setUser={setUser} onLogout={handleLogout}  />} />
      </Routes>
    </div>
  );
}
