import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-neutral-950">
      {/* Simple animated orbs */}
      <div className="absolute inset-0">
        {/* Primary blue orb */}
        <div 
          className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,1) 0%, rgba(37,99,235,0) 70%)',
            top: '20%',
            left: '30%',
            animation: 'pulse 8s infinite'
          }}
        ></div>
        
        {/* Secondary blue orb */}
        <div 
          className="absolute w-80 h-80 rounded-full filter blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,1) 0%, rgba(59,130,246,0) 70%)',
            bottom: '25%',
            right: '25%',
            animation: 'pulse 10s infinite 2s'
          }}
        ></div>
        
        {/* White highlight */}
        <div 
          className="absolute w-64 h-64 rounded-full filter blur-3xl opacity-5"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)',
            top: '60%',
            left: '20%',
            animation: 'pulse 12s infinite 4s'
          }}
        ></div>
        
        {/* Simple accent lines */}
        <div 
          className="absolute top-1/2 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.1), transparent)',
            animation: 'pulse 10s infinite 1s'
          }}
        ></div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;