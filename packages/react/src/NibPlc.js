import { createElement as h, forwardRef } from 'react';

export const NibPlc = forwardRef(function NibPlc({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "4", width: "18", height: "16", rx: "1", fill: "none" }),
    h('path', { d: "M8 4v16M3 8h5M3 12h5M3 16h5M11 8h7M11 11h5M12 15h.01M15 15h.01M18 15h.01", fill: "none" })
  );
});

export default NibPlc;
