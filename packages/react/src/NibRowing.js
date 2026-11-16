import { createElement as h, forwardRef } from 'react';

export const NibRowing = forwardRef(function NibRowing({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "9", cy: "6", r: "1.8", fill: "none" }),
    h('path', { d: "M2 15h20l-2 3H4zM9 9l2 4M9 9l5 1M4 6l16 14M2 21c2-1 3 1 5 0", fill: "none" })
  );
});

export default NibRowing;
