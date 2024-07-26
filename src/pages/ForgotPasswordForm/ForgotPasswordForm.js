import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../utilities/api-service';
import styles from './ForgotPasswordForm.module.scss';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    try {
      await resetPassword({ email });
      setSuccessMessage('Password reset successful. Check your email for further instructions.');
      setError('');
      setEmail(''); // Clear email input on success
    } catch (error) {
      setError(error.message || 'Failed to reset password');
      setSuccessMessage('');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Forgot Password?</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        {successMessage && <div className={styles.success}>{successMessage}</div>}
        <button type="submit" className={styles.button}>
          Reset Password
        </button>
      </form>
      <span className={styles.link} onClick={() => navigate('/auth')}>
        Back To Login
      </span>
    </div>
  );
}
