import { createElement as h, forwardRef } from 'react';

export const NibCnc = forwardRef(function NibCnc({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "3", width: "20", height: "18", rx: "1", fill: "none" }),
    h('path', { d: "M2 7h20M12 7v5M10 12h4l-1 3h-2zM5 18h14", fill: "none" })
  );
});

export default NibCnc;
