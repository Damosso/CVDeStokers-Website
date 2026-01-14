import React, { useMemo } from 'react';

const ConfettiBackground: React.FC = () => {
  // Generate some static random positions for a "confetti" look in the background
  // Using fixed styles to avoid heavy libraries
  const particles = useMemo(() => Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    color: ['bg-red-500', 'bg-yellow-400', 'bg-green-500'][Math.floor(Math.random() * 3)],
    animationDelay: `${Math.random() * 5}s`,
    shape: Math.random() > 0.5 ? 'rounded-full' : 'rounded-sm',
    size: Math.random() > 0.5 ? 'w-3 h-3' : 'w-2 h-4', // mix of dots and rectangles
    rotation: Math.random() * 360,
  })), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute ${p.color} ${p.shape} ${p.size} animate-pulse`}
          style={{
            left: p.left,
            top: p.top,
            transform: `rotate(${p.rotation}deg)`,
            opacity: 0.9
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiBackground;