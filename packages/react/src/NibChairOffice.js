import { createElement as h, forwardRef } from 'react';

export const NibChairOffice = forwardRef(function NibChairOffice({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "7", y: "2", width: "10", height: "9", rx: "3", fill: "none" }),
    h('path', { d: "M6 13h12M12 13v5M7 21l5-3 5 3M5 10v3M19 10v3", fill: "none" })
  );
});

export default NibChairOffice;
