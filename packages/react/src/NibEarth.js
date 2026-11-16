import { createElement as h, forwardRef } from 'react';

export const NibEarth = forwardRef(function NibEarth({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('path', { d: "M5 6l2 3 3 1-1 3 2 2v4M15 3.5L14 6l2 2 3-1M21 13l-3-1-2 2 1 3 1 2", fill: "none" })
  );
});

export default NibEarth;
