import { createElement as h, forwardRef } from 'react';

export const NibShieldLock = forwardRef(function NibShieldLock({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6zM10.5 11.5v-1a1.5 1.5 0 0 1 3 0v1", fill: "none" }),
    h('rect', { x: "9.5", y: "11.5", width: "5", height: "4", rx: "1", fill: "none" })
  );
});

export default NibShieldLock;
