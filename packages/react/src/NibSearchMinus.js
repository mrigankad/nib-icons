import { createElement as h, forwardRef } from 'react';

export const NibSearchMinus = forwardRef(function NibSearchMinus({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "11", cy: "11", r: "7", fill: "none" }),
    h('path', { d: "M20 20l-4-4M8 11h6", fill: "none" })
  );
});

export default NibSearchMinus;
