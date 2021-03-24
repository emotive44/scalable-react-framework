import React, { useEffect, useState, useRef } from 'react';


const useAnimateItemOnShow = () => {
  const ref = useRef(null);
  const [animateClass, setAnimateClass] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let isShow = entries[0].isIntersecting;
      if(isShow) {
        setAnimateClass('animate');
      } else {
        setAnimateClass('');
      }
    });

    observer.observe(ref.current!);
  }, [ref]);


  return { ref, animateClass }
}

export default useAnimateItemOnShow;
