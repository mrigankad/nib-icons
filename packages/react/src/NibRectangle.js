import { createElement as h, forwardRef } from 'react';

export const NibRectangle = forwardRef(function NibRectangle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "6", width: "20", height: "12", rx: "1.5", fill: "none" })
  );
});

export default NibRectangle;
