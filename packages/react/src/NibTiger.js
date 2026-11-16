import { createElement as h, forwardRef } from 'react';

export const NibTiger = forwardRef(function NibTiger({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 6a2 2 0 1 1 3-2M19 6a2 2 0 1 0-3-2M4 13c0-5 3-9 8-9s8 4 8 9-4 8-8 8-8-3-8-8zM12 4v3M10 5l.5 2.5M14 5l-.5 2.5M4.5 11H7M4.5 14H7M19.5 11H17M19.5 14H17M9.5 11h.01M14.5 11h.01M11 15h2l-1 1z", fill: "none" })
  );
});

export default NibTiger;
