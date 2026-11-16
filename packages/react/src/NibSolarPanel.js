import { createElement as h, forwardRef } from 'react';

export const NibSolarPanel = forwardRef(function NibSolarPanel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 9h14l2 8H3zM4 13h16M9.5 9l-1 8M14.5 9l1 8M12 17v4M8 21h8M12 2v2M7 4l1 1.5M17 4l-1 1.5", fill: "none" })
  );
});

export default NibSolarPanel;
