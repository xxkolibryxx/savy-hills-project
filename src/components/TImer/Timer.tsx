import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return <>{currentTime.toLocaleTimeString()}</>;
};

export default Timer;
