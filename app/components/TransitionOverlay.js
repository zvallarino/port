// app/components/TransitionOverlay.js
"use client"
import React, { useEffect, useState } from 'react';

const TransitionOverlay = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000); // Duration of the animation (1s)

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 animate-pageTransition"></div>
  );
};

export default TransitionOverlay;