import { useState, useEffect } from 'react';
import { isSafari } from 'react-device-detect';

const UserBrowserDetection = () => {

  const [browser, setBrowser] = useState('');

  useEffect(() => {
    if(isSafari){
      setBrowser("safari");
    }
  }, []);

  return browser;
};

export default UserBrowserDetection;