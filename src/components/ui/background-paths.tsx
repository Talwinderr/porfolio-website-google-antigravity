import React from 'react';

interface BackgroundPathsProps {
  title?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url: string;
        style?: React.CSSProperties;
        className?: string;
      };
    }
  }
}

export function BackgroundPaths({ title }: BackgroundPathsProps) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Spline 3D Animation */}
      <spline-viewer 
        url="https://prod.spline.design/UnydjJNDGZGzrI3K/scene.splinecode"
        className="absolute inset-0 w-full h-full"
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.3,
          pointerEvents: 'none',
          animation: 'none'
        }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="none"
              strokeWidth="1"
            />
          </pattern>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
        </defs>
        
        {/* Animated paths */}
        <g className="animate-pulse">
          <path
            d="M0,200 Q250,100 500,200 T1000,200"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              values="M0,200 Q250,100 500,200 T1000,200;M0,250 Q250,150 500,250 T1000,250;M0,200 Q250,100 500,200 T1000,200"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          
          <path
            d="M0,400 Q250,300 500,400 T1000,400"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              values="M0,400 Q250,300 500,400 T1000,400;M0,350 Q250,250 500,350 T1000,350;M0,400 Q250,300 500,400 T1000,400"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          
          <path
            d="M0,600 Q250,500 500,600 T1000,600"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            opacity="0.3"
          >
            <animate
              attributeName="d"
              values="M0,600 Q250,500 500,600 T1000,600;M0,650 Q250,550 500,650 T1000,650;M0,600 Q250,500 500,600 T1000,600"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
          
          <path
            d="M0,800 Q250,700 500,800 T1000,800"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            opacity="0.2"
          >
            <animate
              attributeName="d"
              values="M0,800 Q250,700 500,800 T1000,800;M0,750 Q250,650 500,750 T1000,750;M0,800 Q250,700 500,800 T1000,800"
              dur="14s"
              repeatCount="indefinite"
            />
          </path>
        </g>
        
        {/* Floating dots */}
        <g>
          <circle cx="100" cy="150" r="2" fill="rgba(255,255,255,0.1)">
            <animate attributeName="cy" values="150;120;150" dur="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="350" r="1.5" fill="rgba(255,255,255,0.08)">
            <animate attributeName="cy" values="350;320;350" dur="8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.08;0.2;0.08" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="700" cy="250" r="2.5" fill="rgba(255,255,255,0.06)">
            <animate attributeName="cy" values="250;220;250" dur="10s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.06;0.15;0.06" dur="10s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="450" r="1" fill="rgba(255,255,255,0.1)">
            <animate attributeName="cy" values="450;420;450" dur="7s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0.25;0.1" dur="7s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
}