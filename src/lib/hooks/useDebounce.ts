import React, { useEffect, useState } from "react";

// Function that uses an internal useState and useEffect to debounce a value
export function useDebounce<T>(value: T, delay: number = 50000) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timerRef = React.useRef(null);

  useEffect(() => {
    const timer = (timerRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay));

    // Will be called when the component unmounts or the delay changes
    return () => {
      clearTimeout(timer);
      clearTimeout(timerRef.current);
      timerRef.current = null;
    };
  }, [value, delay]);

  return debouncedValue;
}
