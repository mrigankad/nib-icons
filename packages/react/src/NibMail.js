import { createElement as h, forwardRef } from 'react';

export const NibMail = forwardRef(function NibMail({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "5", width: "18", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M3 7l9 6 9-6", fill: "none" })
  );
});

export default NibMail;
