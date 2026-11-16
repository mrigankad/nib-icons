import { createElement as h, forwardRef } from 'react';

export const NibMicrophoneOff = forwardRef(function NibMicrophoneOff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 9V5a3 3 0 0 1 5.8-1M15 10v1a3 3 0 0 1-4.6 2.5M5 11a7 7 0 0 0 11.5 5.3M19 11a7 7 0 0 1-.4 2.3M12 18v4M3 3l18 18", fill: "none" })
  );
});

export default NibMicrophoneOff;
