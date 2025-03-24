import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-neutral-950">
      {/* Material-inspired subtle animated elements */}
      <div className="absolute top-0 left-0 w-full h-screen opacity-30">
        {/* Primary blue accent orb */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        
        {/* Secondary blue accent */}
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse animation-delay-2000"></div>
        
        {/* Subtle white highlight */}
        <div className="absolute top-2/3 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-5 animate-pulse animation-delay-4000"></div>
        
        {/* Geometric accent lines (material design inspired) */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse animation-delay-3000"></div>
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-pulse animation-delay-5000"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;