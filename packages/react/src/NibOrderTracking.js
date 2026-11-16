import { createElement as h, forwardRef } from 'react';

export const NibOrderTracking = forwardRef(function NibOrderTracking({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "5.5", cy: "18.5", r: "2", fill: "none" }),
    h('path', { d: "M7.5 18.5h8.5a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h3M18 9s-3-2.5-3-4.7a3 3 0 0 1 6 0C21 6.5 18 9 18 9z", fill: "none" })
  );
});

export default NibOrderTracking;
