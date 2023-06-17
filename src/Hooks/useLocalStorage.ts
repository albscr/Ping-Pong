import { useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setValue] = useState<T>(() => {
    try {
      const player = window.localStorage.getItem(key);
      return player ? JSON.parse(player) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  };

  return [storedValue, setLocalStorage];
}
