'use client';
import { useEffect, useState } from 'react';

const useScreenSize = () =>{
    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
      const handleResize = () => {
          setScreenSize({
              width: window.innerWidth,
              height: window.innerHeight
          })
      }

      // Set initial size
      handleResize();
      
      window.addEventListener('resize', handleResize)
      return () => {
          window.removeEventListener('resize', handleResize)
      }
    }, [])
    return screenSize
}

export default useScreenSize;