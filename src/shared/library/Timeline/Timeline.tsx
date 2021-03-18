import React, { FC } from 'react';
import classes from './Timeline.module.scss';
import moment from 'moment';

import TimelineSign from './TimelineSign';
import timelineData from '../../mocks/timelineData';


type TDateFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY/MM/DD';

interface TimelineProps {
  dateFormat: TDateFormat,
}

const Timeline:FC<TimelineProps> = ({
  dateFormat,
}) => {
  return (
    <div className={classes.timeline}>
      {timelineData.sort((a, b) => +b.date - +a.date).map((sign, i) => {
        return (
          <TimelineSign 
            key={i} 
            content={sign.content}
            date={moment(sign.date).format(dateFormat).toString()} 
          />
        );
      })}
    </div>
  );
}

export default Timeline;
