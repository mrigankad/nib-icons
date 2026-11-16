import { createElement as h, forwardRef } from 'react';

export const NibWindowHome = forwardRef(function NibWindowHome({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "3", width: "16", height: "16", rx: "1", fill: "none" }),
    h('path', { d: "M12 3v16M4 11h16M2 21h20", fill: "none" })
  );
});

export default NibWindowHome;
