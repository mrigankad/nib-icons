import { createElement as h, forwardRef } from 'react';

export const NibConsole = forwardRef(function NibConsole({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "3", width: "20", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M6 8l3 2.5L6 13M11 13h4M8 21h8M12 17v4", fill: "none" })
  );
});

export default NibConsole;
