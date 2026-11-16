import { createElement as h, forwardRef } from 'react';

export const NibAtSign = forwardRef(function NibAtSign({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "4", fill: "none" }),
    h('path', { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", fill: "none" })
  );
});

export default NibAtSign;
