import { createElement as h, forwardRef } from 'react';

export const NibHeater = forwardRef(function NibHeater({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "8", width: "18", height: "11", rx: "2", fill: "none" }),
    h('path', { d: "M7 8v11M11 8v11M15 8v11M5 19v2M19 19v2M8 2c-1 1.5 1 2.5 0 4M12 2c-1 1.5 1 2.5 0 4M16 2c-1 1.5 1 2.5 0 4", fill: "none" })
  );
});

export default NibHeater;
