import { createElement as h, forwardRef } from 'react';

export const NibShapeCircle = forwardRef(function NibShapeCircle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "7.5", fill: "none" }),
    h('path', { d: "M3.5 3.5h.01M20.5 3.5h.01M3.5 20.5h.01M20.5 20.5h.01", fill: "none" })
  );
});

export default NibShapeCircle;
