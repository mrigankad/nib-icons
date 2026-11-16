import { createElement as h, forwardRef } from 'react';

export const NibSaree = forwardRef(function NibSaree({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "4", r: "2", fill: "none" }),
    h('path', { d: "M9 7h6l2 6-3 1 1 8H7l2-9-2-1zM15 7l-6 9M8 22l2-3", fill: "none" })
  );
});

export default NibSaree;
