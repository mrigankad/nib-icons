import { createElement as h, forwardRef } from 'react';

export const NibStopSign = forwardRef(function NibStopSign({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 2.5h8l5.5 5.5v8L16 21.5H8L2.5 16V8zM8 12h8", fill: "none" })
  );
});

export default NibStopSign;
