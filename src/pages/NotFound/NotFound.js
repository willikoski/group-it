import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <img src="/img/cat.gif" alt="Cat gif" className={styles.notFoundImage} />
      <div className={styles.notFoundOptions}>
        <Link to="/" className={styles.notFoundLink}>Go to Home Page</Link>
        <Link to="/auth" className={styles.notFoundLink}>Login / Signup</Link>
        <Link to="/auth/forgot-password" className={styles.notFoundLink}>Forgot Password</Link>
      </div>
    </div>
  );
}

export default NotFound;
