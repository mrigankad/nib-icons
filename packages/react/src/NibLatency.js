import { createElement as h, forwardRef } from 'react';

export const NibLatency = forwardRef(function NibLatency({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 12h4l2-5 3 10 3-14 3 9h5", fill: "none" })
  );
});

export default NibLatency;
