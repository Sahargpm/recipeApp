"use client";

import { useState, useEffect } from 'react';
import { BreakPoints } from '../strings/break-points';

const getDeviceConfig = (width: number): string => {
    for (const [key, value] of Object.entries(BreakPoints)) 
    {
    
        if (width >= value.min && width <= (value.max || Infinity)) {
    
            return key;
    
        }
    
    }
    return 'unknown';
  };


export const useBreakpoint = () => {
  
  const [breakpoint, setBreakpoint] = useState<string>('largeDesktop');

  useEffect(() => {
    
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setBreakpoint(getDeviceConfig(window.innerWidth));
      }
    };

  
    handleResize();

    window.addEventListener('resize', handleResize);
  
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoint;
};
