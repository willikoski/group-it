import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProfilePage.module.scss';

const ProfilePage = ({ user, onLogout }) => {
  const { userId } = useParams();
  const [profileUser, setProfileUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setProfileUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return (
      <div className={styles.loginPrompt}>
        <p>To view the profile page, please log in.</p>
        <button onClick={() => navigate('/auth')}>Go to Login</button>
      </div>
    );
  }

  if (!profileUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <h1>Profile Page</h1>
        <div className={styles.userInfo}>
          <p><strong>Name:</strong> {profileUser.name}</p>
          <p><strong>Email:</strong> {profileUser.email}</p>
          <p>add more stuff here?</p>
        </div>
        <button className={styles.logoutButton} onClick={onLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default ProfilePage;
