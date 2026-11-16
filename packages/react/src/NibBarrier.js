import { createElement as h, forwardRef } from 'react';

export const NibBarrier = forwardRef(function NibBarrier({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "7", width: "20", height: "6", rx: "1", fill: "none" }),
    h('path', { d: "M6 7l-4 6M12 7l-4 6M18 7l-4 6M22 9l-3 4M5 13v8M19 13v8M3 21h4M17 21h4", fill: "none" })
  );
});

export default NibBarrier;
