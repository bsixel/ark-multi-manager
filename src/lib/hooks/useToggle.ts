import { useCallback, useState } from "react";

// A simple toggle-able boolean hook
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  // Callback which toggles the value to the opposite of what it currently is, or if provided, to a given boolean value
  const toggle = useCallback((value?: boolean) => {
    if (value !== undefined) {
      setValue(value);
    } else {
      setValue((currentValue) => !currentValue);
    }
  }, []);

  return { value, toggle };
};

export default useToggle;
