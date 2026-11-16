import { createElement as h, forwardRef } from 'react';

export const NibGif = forwardRef(function NibGif({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "20", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M9 9.5H7.5A1.5 1.5 0 0 0 6 11v2a1.5 1.5 0 0 0 1.5 1.5H9V12H8M12 9.5v5M15 14.5v-5h3M15 12h2.5", fill: "none" })
  );
});

export default NibGif;
