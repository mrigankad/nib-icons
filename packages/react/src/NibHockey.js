import { createElement as h, forwardRef } from 'react';

export const NibHockey = forwardRef(function NibHockey({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M18 2L9 18c-.5 1-1.5 2-3 2H3v-2h3M21 2l-7 13", fill: "none" }),
    h('ellipse', { cx: "18", cy: "20", rx: "3", ry: "1.5", fill: "none" })
  );
});

export default NibHockey;
