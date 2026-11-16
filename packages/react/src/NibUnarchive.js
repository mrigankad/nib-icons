import { createElement as h, forwardRef } from 'react';

export const NibUnarchive = forwardRef(function NibUnarchive({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "3", width: "20", height: "5", rx: "1", fill: "none" }),
    h('path', { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M12 18v-6M9.5 14.5L12 12l2.5 2.5", fill: "none" })
  );
});

export default NibUnarchive;
