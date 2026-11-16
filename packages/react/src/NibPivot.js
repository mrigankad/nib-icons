import { createElement as h, forwardRef } from 'react';

export const NibPivot = forwardRef(function NibPivot({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none" }),
    h('path', { d: "M3 8h18M8 3v18M12 12h5v5M15 15l2 2 2-2M12 12v-.01", fill: "none" })
  );
});

export default NibPivot;
