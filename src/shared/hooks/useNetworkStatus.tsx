import React, { useEffect, useState } from 'react';


const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState('');

  useEffect(() => {
    window.addEventListener('offline', () => {
      setNetworkStatus('offline');
    });

    window.addEventListener('online', () => {
      setNetworkStatus('online');
    });

  }, [networkStatus]);

  return { networkStatus }
}

export default useNetworkStatus;
