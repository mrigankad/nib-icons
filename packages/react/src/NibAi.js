import { createElement as h, forwardRef } from 'react';

export const NibAi = forwardRef(function NibAi({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "4", fill: "none" }),
    h('path', { d: "M7 16l2.5-8 2.5 8M7.8 13.5h3.4M16 8v8", fill: "none" })
  );
});

export default NibAi;
