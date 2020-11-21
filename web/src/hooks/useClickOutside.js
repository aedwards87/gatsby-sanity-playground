import { useEffect, useRef } from 'react';

export function useClickOutside(ref, callback) {
  const callbackRef = useRef();
  callbackRef.current = callback;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref?.current?.contains(e.target) && callback) {
        callbackRef.current(e);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    // document.addEventListener('touchstart', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      // document.removeEventListener('touchstart', handleClickOutside, true);
    };
  }, [ref, callback]);
}
