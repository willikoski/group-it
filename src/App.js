import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage/Authpage';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'; // Adjust the import path as needed
import ResetPassword from './components/ResetPassword/ResetPassword';
import ProfilePage from './pages/ProfilePage/ProfilePage'

export default function App() {
  const [user, setUser] = useState(null);

  return (

      <div className="App">
        <Routes>
          <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword user={user} setUser={setUser} />} />
          <Route path='/profile/:userId' element={<ProfilePage user={user} setUser={setUser} />} />
          {/* Other routes */}
        </Routes>
      </div>

  );
}
