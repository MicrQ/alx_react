import React from 'react';
import './Notifications.css'
import closeBtn from '../assets/close-btn.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

function Notifications({ displayDrawer }) {
  return (
    <React.Fragment>
      {displayDrawer ? (
        <div className="'flex-area'">
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
          <div className="Notifications">
            <button
              style={{float:'right', background: 'none', border: 'none'}}
              aria-label="Close"
              onClick={console.log("Close button has been clicked")}
            >
              <img src={closeBtn} alt="closebtn" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
          </div>
        </div>
      ) : (
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
      )}
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;