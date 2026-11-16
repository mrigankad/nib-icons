import { createElement as h, forwardRef } from 'react';

export const NibCarKey = forwardRef(function NibCarKey({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "2", width: "9", height: "12", rx: "3", fill: "none" }),
    h('path', { d: "M7.5 6v2M7.5 14v8M7.5 18h3M7.5 21h2M15 6a5 5 0 0 1 0 6M18 4a8 8 0 0 1 0 10", fill: "none" })
  );
});

export default NibCarKey;
