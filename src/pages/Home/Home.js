import React from 'react';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1 className={styles.projectTitle}>Open Source Login/Signup React Project</h1>
        <p className={styles.projectDescription}>
          Welcome to my first open source project, designed to help students visualize login/signup functionality more clearly. Special thanks to my classmates for our final project, Goose. Check it out here: <a href="https://goose.danwheeler.me" target="_blank" rel="noopener noreferrer" data-tooltip="Goose Final Project"> Goose</a>.
        </p>
        <p className={styles.projectDescription}>
          I would like to leave a special thank you to my group mates during General Assembly coding bootcamp:
        </p>
        <ul className={styles.classmateList}>
          <li><a href="https://github.com/zjuan4101" target="_blank" rel="noopener noreferrer" data-tooltip="Check Their Awesome GitHub">Juan Zelaya</a></li>
          <li><a href="https://github.com/tylerpierson" target="_blank" rel="noopener noreferrer" data-tooltip="Check Their Awesome GitHub">Tyler Pierson</a></li>
          <li><a href="https://github.com/brycesexton/" target="_blank" rel="noopener noreferrer" data-tooltip="Check Their Awesome GitHub">Bryce Sexton</a></li>
          <li><a href="https://github.com/Kennyi00/" target="_blank" rel="noopener noreferrer" data-tooltip="Check Their Awesome GitHub">Isaiah Branstetter</a></li>
          <li><a href="https://github.com/dwheeler7" target="_blank" rel="noopener noreferrer" data-tooltip="Check Their Awesome GitHub">Danny Wheeler</a></li>
          <li><a href="https://github.com/jalensmith17" target="_blank" rel="noopener noreferrer" data-tooltip="Check Their Awesome GitHub">Jalen Smith</a></li>
          <li><a href="https://github.com/Jcasanova1990" target="_blank" rel="noopener noreferrer" data-tooltip="Check Their Awesome GitHub">Jeremy Casanova</a></li>
        </ul>
      </header>
     
      <section className={styles.section}>
        <h2 className={styles.title}>Project Overview</h2>
        <p className={styles.titlep}>
          This project demonstrates how to implement login/signup functionality in a React application. It is designed to help students understand and visualize these processes clearly. Anyone can use this project as their own to build off.
        </p>
      </section>

      <div className={styles.contentWrapper}>
        <section className={styles.section}>
          <h2 className={styles.title}>Authentication (/auth Path)</h2>
          <div className={styles.subsection}>
          <h3 className={styles.h3styler}>Login</h3>
            <p>
              Allows existing users to access their accounts. Components include:
            </p>
            <ul>
              <li><strong>Username:</strong> Field for the user's username.</li>
              <li><strong>Password:</strong> Field for the user's password.</li>
              <li><strong>Remember Me:</strong> Checkbox to keep the user logged in using localStorage.</li>
            </ul>
            <p>
              If login is successful, users are redirected to the main page. Failed attempts show an error message.
            </p>
            <h3 className={styles.h3styler}>Signup</h3>
            <p>
              Allows new users to create an account. Components include:
            </p>
            <ul>
              <li><strong>Username:</strong> Field for a unique username.</li>
              <li><strong>Password:</strong> Field for a secure password.</li>
              <li><strong>Confirm Password:</strong> Field to confirm the password.</li>
            </ul>
            <p>
              After registration, users receive a confirmation message and can log in with their new credentials.
            </p>
            <h3 className={styles.h3styler}>Nodemailer</h3>
            <p>
              Allows email-api.js to send out emails, for password recovery and reset.
            </p>
            <ul>
              <li><strong>Nodemailer package is needed:</strong> npm i nodemailer</li>
              <li><strong>GMAIL=GMAILUSERNAME:</strong> Gmail username in .env file</li>
              <li><strong>GMAILPASS=APPPASSWORD:</strong> <a href="https://myaccount.google.com/apppasswords" target="_blank" rel="noopener noreferrer" data-tooltip="Click here to create an APP password">Generated App password in .env file</a></li>
            </ul>
            <p>If successful emails will be sent automatically on forgot passwords forms and user will be emailed a password reset link with the correct token. Email-api also has the power to make support tickets where the account will be sent an email as well.</p>
          </div>
        </section>
      
        <section className={styles.section}>
          <h2 className={styles.title}>Forgot Password and Reset Password</h2>
          <div className={styles.subsection}>
            <h3 className={styles.h3styler}>/forgot-password</h3>
            <p>
              The <code>/forgot-password</code> endpoint allows users to request a password reset. When a user submits their email address, the server generates a temporary password and a reset token. This token and password are then sent to the user via email using `nodemailer`. The user can use this temporary password to log in and reset their password.
            </p>
            <h3 className={styles.h3styler}>/reset-password</h3>
            <p>
              The <code>/reset-password</code> endpoint is used to update the user's password. After receiving the temporary password and reset token from the <code>/forgot-password</code> process, the user provides a new password along with the reset token. The server verifies the token, updates the user's password, and clears the reset token.
            </p>
            <h3 className={styles.h3styler}>How it Works</h3>
            <ul>
              <li>The user submits their email to the <code>/forgot-password</code> endpoint.</li>
              <li>The server generates a temporary password and a reset token, hashes the password, and saves it in the database.</li>
              <li>The server sends an email to the user containing the temporary password and reset token using `nodemailer`.</li>
              <li>The user receives the email, logs in with the temporary password, and uses the <code>/reset-password</code> endpoint to set a new password using the provided token.</li>
              <li>The server verifies the token, updates the user's password, and clears the reset token.</li>
            </ul>
          </div>
        </section>
      </div>
      
      <section className={styles.section}>
        <h2 className={styles.title}>App.js Paths</h2>
        <div className={styles.subsection}>
          <h3 className={styles.h3styler}><Link to="/auth" className={styles.apiLink}>/auth</Link></h3>
          <p>
            The base endpoint for authentication:
          </p>
          <ul>
            <li><strong><Link to="/auth">/auth</Link></strong>: Authentication page. Signup/Login here.</li>
            <li><strong><Link to="/auth/forgot-password">/auth/forgot-password</Link></strong>: Forgot password page.</li>
            <li><strong><Link to="/auth/reset-password/:token">/auth/reset-password</Link></strong>: Reset password page.</li>
          </ul>
          <h3 className={styles.h3styler}><Link to="/profile/:userId" className={styles.apiLink}>/profile/:userId</Link></h3>
          <p>
            <strong><Link to="/profile/:userId">/profile/:userId</Link></strong>: User profile page.
          </p>
          <h3 className={styles.h3styler}><Link to="/*" className={styles.apiLink}>/NotFound</Link></h3>
          <p>
            <strong><Link to="/*">/NotFound</Link></strong>: Custom 404 NotFound Page
          </p>
        </div>
      </section>
    </div>
  );
}
