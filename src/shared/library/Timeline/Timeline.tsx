import React, { FC } from 'react';
import classes from './Timeline.module.scss';


interface TimelineProps {
  className           ?: string,
}

const Timeline:FC<TimelineProps> = ({ className, children }) => {
  const timelineClasses = [classes.timeline];
  // add custom styles
  if(className) {
    timelineClasses.push(className);
  }

  return (
    <div className={timelineClasses.join(' ')}>
      {children}
    </div>
  );
}

export default Timeline;
