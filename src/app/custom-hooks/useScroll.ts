'use client';
import { useState, useEffect } from 'react';

const useScroll = (scrollPoint:number=60):boolean => {
  
  const [isScroll, setIsScroll] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState<number | null>(null);
  const [secondLastScrollY, setSecondLastScrollY] = useState<number | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {

    if (count === 0) {
      const storedIsScroll = sessionStorage.getItem('isScroll');
      if (storedIsScroll !== null) {
        setIsScroll(storedIsScroll === 'true');
        setCount(1);
      }
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === secondLastScrollY) {
        return;
      }


      if (currentScrollY === prevScrollY) {
        setSecondLastScrollY(prevScrollY);
        return;
      }

      setSecondLastScrollY(prevScrollY);
      setPrevScrollY(currentScrollY);

   
      if (currentScrollY >= scrollPoint) {
        setIsScroll(true);
      } else if (currentScrollY <= 10) {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const handleBeforeUnload = () => {
      sessionStorage.setItem('isScroll', isScroll.toString());
      sessionStorage.setItem('count', '0'); 
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [prevScrollY, secondLastScrollY, isScroll, count]);

  return isScroll;
};

export default useScroll;
