import { createElement as h, forwardRef } from 'react';

export const NibSale = forwardRef(function NibSale({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9zM9.5 14l4-4.5", fill: "none" }),
    h('circle', { cx: "9.5", cy: "9.5", r: ".8", fill: "none" }),
    h('circle', { cx: "13.5", cy: "14", r: ".8", fill: "none" })
  );
});

export default NibSale;
