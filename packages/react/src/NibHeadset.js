import { createElement as h, forwardRef } from 'react';

export const NibHeadset = forwardRef(function NibHeadset({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 14v-2a9 9 0 0 1 18 0v2M19.5 19v.5A2.5 2.5 0 0 1 17 22h-4", fill: "none" }),
    h('rect', { x: "2.5", y: "13", width: "4", height: "6", rx: "1.5", fill: "none" }),
    h('rect', { x: "17.5", y: "13", width: "4", height: "6", rx: "1.5", fill: "none" })
  );
});

export default NibHeadset;
