import { createElement as h, forwardRef } from 'react';

export const NibWindsock = forwardRef(function NibWindsock({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 3v19M4 5l17 2.5v4L4 14M10 5.9v7.2M15.5 6.7v5.6", fill: "none" })
  );
});

export default NibWindsock;
