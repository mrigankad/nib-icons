import { createElement as h, forwardRef } from 'react';

export const NibLevel = forwardRef(function NibLevel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "8", width: "20", height: "8", rx: "1", fill: "none" }),
    h('rect', { x: "9", y: "10", width: "6", height: "4", rx: "2", fill: "none" }),
    h('path', { d: "M12 10v4M5 8v8M19 8v8", fill: "none" })
  );
});

export default NibLevel;
