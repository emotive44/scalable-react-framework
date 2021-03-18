import React, { FC } from 'react';
import classes from './TimelineSign.module.scss';



interface TimelineSignProps {
  date       : string,
  content    : string,
}


const TimelineSign:FC<TimelineSignProps> = ({
  date,
  content,
}) => {
  return (
    <div className={classes.sign}>
      <div className={classes.wrapper}>
        <h3>{date}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default TimelineSign;
