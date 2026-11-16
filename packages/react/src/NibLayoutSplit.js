import { createElement as h, forwardRef } from 'react';

export const NibLayoutSplit = forwardRef(function NibLayoutSplit({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none" }),
    h('path', { d: "M12 3v18M8 10l-2 2 2 2M16 10l2 2-2 2", fill: "none" })
  );
});

export default NibLayoutSplit;
