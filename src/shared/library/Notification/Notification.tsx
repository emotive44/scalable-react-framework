import React, { FC, useState, useEffect } from 'react';
import classes from './Notification.module.scss';

import Text from '../Text/Text';


type TType        = 'success' | 'info' | 'warning' | 'error';
type TPosition    = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface NotificationProps {
  type            :  TType,
  title           :  string,
  message         :  string,
  secondsDelay    ?: number,
  className       ?: string,
  autoClose       ?: boolean,
  isShow          ?: boolean,
  position        :  TPosition,
}

const Notification: FC<NotificationProps> = ({
  type,
  title,
  isShow,
  message,
  position,
  autoClose,
  className,
  secondsDelay,
}) => {
  const [notificationClasses, setNotificationClasses] = useState([classes.notification, classes[type], classes[position]]);
  if(className) {
    notificationClasses.push(className);
  }

  let iconClass: string;
  switch(type) {
    case 'warning':
      iconClass =  'fa-exclamation-triangle';
      break;
    case 'success':
      iconClass = 'fa-check-circle';
      break;
    case 'error':
      iconClass = 'fa-times';
      break;
    case 'info':
      iconClass = 'fa-info-circle';
      break;
  }

  let timeOut: number = 4000;
  if(secondsDelay) {
    timeOut = secondsDelay * 1000;
  }

  useEffect(() => {
    // show and hide notification with transition effect
    if(isShow) {
      setNotificationClasses(prev => ([
        ...prev.filter(cl => cl !== classes.closed),
        classes.show,
      ]));
    } else {
      setNotificationClasses(prev => ([
        ...prev.filter(cl => cl !== classes.show),
        classes.closed,
      ]));
    }

    if(autoClose) {
      setTimeout(() => {
        closeNotification();  
      }, timeOut);
    }
  }, [autoClose, timeOut, isShow]);

  const closeNotification = () => {
   setNotificationClasses(prev => ([
     ...prev,
     classes.closed
   ]));
  }

  return (
    <div className={notificationClasses.join(' ')} >
      <div className={classes.content} >
        <div className={classes.title}>
          <i className={['fas', iconClass].join(' ')} />
          <Text
            className       = {classes['title-text']}
            fontSize        = {16}
            fontWeight      = "700"
            textTransform   = "uppercase" 
          >
            {title}
          </Text>
        </div>
        <Text textIndent={10} fontSize={15} > {message} </Text>
      </div>
      <span 
        className           = {classes.close}
        onClick             = {closeNotification}
      >
        <i className="far fa-times-circle" />
      </span>
    </div>
  )
};

export default Notification;
