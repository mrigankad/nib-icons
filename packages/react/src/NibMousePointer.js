import { createElement as h, forwardRef } from 'react';

export const NibMousePointer = forwardRef(function NibMousePointer({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "6", y: "2", width: "12", height: "20", rx: "6", fill: "none" }),
    h('path', { d: "M12 6v4", fill: "none" })
  );
});

export default NibMousePointer;
