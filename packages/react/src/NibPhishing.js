import { createElement as h, forwardRef } from 'react';

export const NibPhishing = forwardRef(function NibPhishing({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "4", width: "14", height: "10", rx: "1.5", fill: "none" }),
    h('path', { d: "M2 6l7 4.5L16 6M19.5 3v14a3 3 0 0 1-6 0v-1M13.5 16l-1.5 1.5", fill: "none" })
  );
});

export default NibPhishing;
