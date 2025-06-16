import { useEffect, useState } from "react";

export const useTimer = (initialSeconds: number, onComplete?: () => void) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) {
      if (onComplete) onComplete();
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft, onComplete]);

  const reset = () => setSecondsLeft(initialSeconds);

  return {
    secondsLeft,
    reset,
  };
};
