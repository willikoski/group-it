import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);    

  return (
    <main className={styles.AuthPage}>
      <div className={styles.logo}></div>
      <div className={styles.credentialsContainer}>
        {showLogin ? (
          <>
            <LoginForm setUser={setUser} setShowLogin={setShowLogin} />
          </>
        ) : (
          <SignUpForm setUser={setUser} setShowLogin={setShowLogin} />
        )}
      </div>
    </main>
  );
}
