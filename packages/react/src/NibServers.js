import { createElement as h, forwardRef } from 'react';

export const NibServers = forwardRef(function NibServers({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "2.5", width: "18", height: "5", rx: "1.5", fill: "none" }),
    h('rect', { x: "3", y: "9.5", width: "18", height: "5", rx: "1.5", fill: "none" }),
    h('rect', { x: "3", y: "16.5", width: "18", height: "5", rx: "1.5", fill: "none" }),
    h('path', { d: "M6.5 5h.01M6.5 12h.01M6.5 19h.01", fill: "none" })
  );
});

export default NibServers;
