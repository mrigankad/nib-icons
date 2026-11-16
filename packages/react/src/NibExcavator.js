import { createElement as h, forwardRef } from 'react';

export const NibExcavator = forwardRef(function NibExcavator({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "17", width: "12", height: "4", rx: "2", fill: "none" }),
    h('path', { d: "M3 17v-5h4l2 2h3v3M7 12V9h3M12 14l5-9 4 4-2 3M21 9v3h-3", fill: "none" })
  );
});

export default NibExcavator;
