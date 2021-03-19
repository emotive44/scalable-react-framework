import React, { FC, ReactElement, useState, useRef, useEffect } from 'react';
import classes from './TimelineItem.module.scss';
import moment from 'moment';


const colors: any = {
  '1'		: '#EBB65D',
  '2'		: '#A48C53',
  '3'		: '#C46F4E',
  '4'		: '#C55B3F',
  '5'		: '#B22E53',
  '6'		: '#82A774',
  '7'		: '#4EB68C',
  '8'		: '#769851',
  '9'		: '#6882B0',
  '10'	: '#8770A3',
  '11'	: '#CF7DAA',
  '12'	: '#B26492',
};

type TDateFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY/MM/DD';

interface TimelineItemProps {
  date         : Date,
  content     ?: string,
  title       ?: string,
  icon        ?: ReactElement,
  dateFormat   : TDateFormat,
}

const TimelineItem:FC<TimelineItemProps> = ({
  date,
  icon,
  title,
  content,
  children,
  dateFormat,
}) => {
  const month = moment(date).format('M');

  const ref = useRef(null);
  const [signClasses, setSignClasses] = useState([classes.sign]);
 
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let isShow = entries[0].isIntersecting;
      if(isShow) {
        setSignClasses(prev => [...prev, classes.animate]);
      } else {
        setSignClasses(prev => [...prev.filter(cl => cl !== classes.animate)]);
      }
    });

    observer.observe(ref.current!);
  }, [ref]);

  return (
    <div ref={ref} className={signClasses.join(' ')}>
      {icon && (
          <span className={classes.icon} style={{ backgroundColor: colors[month] }}>
            {icon}
          </span>
        )}
      <div className={classes.wrapper} style={{ backgroundColor: colors[month] }}>
        <span className={classes['left-handle']} style={{ backgroundColor: colors[month] }} />
        <span className={classes['right-handle']} style={{ backgroundColor: colors[month] }} />
        <h3>{moment(date).format(dateFormat)}</h3>
        {title && <h4>{title}</h4>}
        {children ? children : <p>{content}</p>}
      </div>
    </div>
  );
}

export default TimelineItem;
