import { createElement as h, forwardRef } from 'react';

export const NibLeaderboard = forwardRef(function NibLeaderboard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 7h18M3 12h18M3 17h18M6 7h.01M6 12h.01M6 17h.01M17 5l.5 1h1l-.8.7.3 1-1-.6-1 .6.3-1L15.5 6h1z", fill: "none" })
  );
});

export default NibLeaderboard;
