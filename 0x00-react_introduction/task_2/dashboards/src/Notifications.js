import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

const Notifications = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button
        style={{ position: 'absolute', top: '10px',
          right: '10px', background: 'transparent', border: 'none' }}
        aria-label="Close"
        onClick={console.log('Close button has been clicked')}
      >
        <img src='close-icon.png' alt="close icon" />
      </button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
};

export default Notifications;
