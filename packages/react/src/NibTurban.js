import { createElement as h, forwardRef } from 'react';

export const NibTurban = forwardRef(function NibTurban({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 12c0-5 3-8 7-8s7 3 7 8zM5 12c2-2 5-3 7-3s5 1 7 3M7 8c3-1 6 0 9 2M8 12v3a4 4 0 0 0 8 0v-3", fill: "none" })
  );
});

export default NibTurban;
