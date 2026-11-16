import { createElement as h, forwardRef } from 'react';

export const NibMouse = forwardRef(function NibMouse({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "6", y: "3", width: "12", height: "18", rx: "6", fill: "none" }),
    h('path', { d: "M12 7v3", fill: "none" })
  );
});

export default NibMouse;
