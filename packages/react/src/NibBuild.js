import { createElement as h, forwardRef } from 'react';

export const NibBuild = forwardRef(function NibBuild({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "14", width: "8", height: "7", rx: "1", fill: "none" }),
    h('rect', { x: "13", y: "14", width: "8", height: "7", rx: "1", fill: "none" }),
    h('rect', { x: "8", y: "5", width: "8", height: "7", rx: "1", fill: "none" })
  );
});

export default NibBuild;
