import React, { useEffect, useState } from "react";

interface QuizTimerProps {
  totalSeconds: number;
  onTimeUp: () => void;
}

const QuizTimer: React.FC<QuizTimerProps> = ({ totalSeconds, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="text-right font-semibold text-sm text-gray-700 mb-4">
      Time Left: <span className="text-red-600">{formatTime(timeLeft)}</span>
    </div>
  );
};

export default QuizTimer;
