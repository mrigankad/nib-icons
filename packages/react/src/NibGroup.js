import { createElement as h, forwardRef } from 'react';

export const NibGroup = forwardRef(function NibGroup({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2.5", y: "2.5", width: "19", height: "19", rx: "2", fill: "none", strokeDasharray: "2.5 3" }),
    h('rect', { x: "6", y: "6", width: "7", height: "7", rx: "1", fill: "none" }),
    h('rect', { x: "11", y: "11", width: "7", height: "7", rx: "1", fill: "none" })
  );
});

export default NibGroup;
