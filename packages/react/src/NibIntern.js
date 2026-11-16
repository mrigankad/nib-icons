import { createElement as h, forwardRef } from 'react';

export const NibIntern = forwardRef(function NibIntern({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "10", r: "3.5", fill: "none" }),
    h('path', { d: "M5 22a7 7 0 0 1 14 0M4 5l8-3 8 3-8 3zM20 5v3", fill: "none" })
  );
});

export default NibIntern;
