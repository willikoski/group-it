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
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    setError('');
    setErrors({ ...errors, [name]: '' }); // Clear individual field error
    console.log(`${name} changed to:`, value); // Logging each input change
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
  
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
  
    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      setError('Please fix the errors in the form.');
      return;
    }
  
    try {
      console.log('Submitting form with data:', formData); // Log form data
      const user = await apiService.signUp(formData); // Log the user object
      console.log('User signed up:', user);
      if (user) {
        setUser(user);
        navigate(`/profile/${user._id}`);
      } else {
        throw new Error('Failed to retrieve user from token.');
      }
    } catch (err) {
      console.error('Sign Up Failed:', err); // Log the error
      setError('Sign Up Failed - Try Again');
    }
  };

  const validateEmail = (email) => {
    if (!email) return 'Email is required';
    return /^\S+@\S+\.\S+$/.test(email) ? '' : 'Invalid email format';
  };

  const validatePassword = (password) => {
    return password.length < 8 ? 'Password must be at least 8 characters long' : '';
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
          <h1>Example Title</h1>
          <div className={styles.inputbox}>
            <input type="text" name="name" value={name} onChange={handleChange} required />
            <label>Name</label>
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </div>
          <div className={styles.inputbox}>
            <input type="text" name="email" value={email} onChange={handleChange} required />
            <label>Email</label>
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
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
            {errors.password && <p className={styles.errorText}>{errors.password}</p>}
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
          <div className={styles.centerError}><p className={styles.errorMessage}>{error}</p></div>
        </form>
      </div>
    </div>
  );
}