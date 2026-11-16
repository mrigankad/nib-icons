import { createElement as h, forwardRef } from 'react';

export const NibFaucet = forwardRef(function NibFaucet({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 9h9a5 5 0 0 1 5 5v1h-4v-1a1 1 0 0 0-1-1H3zM8 9V5M5 5h6M15 19v.01M15 22v.01", fill: "none" })
  );
});

export default NibFaucet;
