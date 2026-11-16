import { createElement as h, forwardRef } from 'react';

export const NibMetro = forwardRef(function NibMetro({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "3", width: "16", height: "15", rx: "2", fill: "none" }),
    h('path', { d: "M4 8h16M12 3v12M7 22l2-4M17 22l-2-4M8 13h.01M16 13h.01", fill: "none" })
  );
});

export default NibMetro;
