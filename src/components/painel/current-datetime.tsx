"use client";

import React, { useState, useEffect } from "react";

const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

export const CurrentDate: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>(
    formatDate(new Date())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(formatDate(new Date()));
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <span className="text-sm font-bold">{currentDate}</span>
    </div>
  );
};

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState<string>(
    formatTime(new Date())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(formatTime(new Date()));
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <span className="text-sm font-bold">{currentTime}</span>
    </div>
  );
};
