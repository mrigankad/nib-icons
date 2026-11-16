import { createElement as h, forwardRef } from 'react';

export const NibDockerBox = forwardRef(function NibDockerBox({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2.5", y: "13", width: "5.5", height: "5.5", rx: "1", fill: "none" }),
    h('rect', { x: "9.25", y: "13", width: "5.5", height: "5.5", rx: "1", fill: "none" }),
    h('rect', { x: "16", y: "13", width: "5.5", height: "5.5", rx: "1", fill: "none" }),
    h('rect', { x: "9.25", y: "6", width: "5.5", height: "5.5", rx: "1", fill: "none" }),
    h('path', { d: "M2 21h20", fill: "none" })
  );
});

export default NibDockerBox;
