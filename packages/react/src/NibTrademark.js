import { createElement as h, forwardRef } from 'react';

export const NibTrademark = forwardRef(function NibTrademark({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 8h8M6 8v8M13 16V8l3.5 5L20 8v8", fill: "none" })
  );
});

export default NibTrademark;
