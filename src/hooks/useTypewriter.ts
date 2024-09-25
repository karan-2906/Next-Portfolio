"use client"
import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, typingSpeed: number, startTyping: boolean = true) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!startTyping) {
      setDisplayText('');
      return;
    }

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, typingSpeed, startTyping]);

  return [displayText];
};
