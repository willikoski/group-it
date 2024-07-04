import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as apiService from '../../utilities/api-service';
import styles from './SignUpForm.module.scss';

export default function SignUpForm({ setUser, setShowLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    setError('');
    console.log(`${name} changed to:`, value); // Logging each input change
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      console.log('Submitting form with data:', formData); // Log form data
      const { userType, ...userData } = formData;
      const user = await apiService.signUp(userData); // Log the response
      console.log('User signed up:', user);
      setUser(user);
      navigate(`/profile/${user._id}`);
    } catch (err) {
      console.error('Sign Up Failed:', err); // Log the error
      setError('Sign Up Failed - Try Again');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    console.log('Password visibility toggled'); // Log password visibility toggling
  };

  const { name, email, password } = formData;
  const disable = !name || !email || !password;

  return (
    <div className={styles.body}>
      <div className={styles.boxc}>
        <form onSubmit={handleSubmit}>
          <h1>DevHive</h1>
          <div className={styles.inputbox}>
            <input type="text" name="name" value={name} onChange={handleChange} required />
            <label>Name</label>
          </div>
          <div className={styles.inputbox}>
            <input type="text" name="email" value={email} onChange={handleChange} required />
            <label>Email</label>
          </div>
          <div className={styles.inputbox}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <span className={styles.showPasswordIcon} onClick={togglePasswordVisibility}>
              {showPassword ? '🔑' : '🛡️'}
            </span>
          </div>
          <button className={styles.button} type="submit" disabled={disable}>
            Sign Up
          </button>
          <div className={styles.login}>
            <p onClick={() => setShowLogin(true)} className={styles.loginLink}>
              Already have an account? Log In
            </p>
          </div>
        </form>
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}
