import { createElement as h, forwardRef } from 'react';

export const NibHotdog = forwardRef(function NibHotdog({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "7.500", width: "16", height: "9.500", rx: "4.750", fill: "none" }),
    h('rect', { x: "2", y: "10.500", width: "20", height: "4", rx: "2", fill: "none" }),
    h('path', { d: "M6 10.500 7 8.500M10 10.500l1-2M14 10.500l1-2M18 10.500l-1-2", fill: "none" })
  );
});

export default NibHotdog;
