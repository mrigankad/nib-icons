import { createElement as h, forwardRef } from 'react';

export const NibWardrobe = forwardRef(function NibWardrobe({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "2", width: "16", height: "18", rx: "1", fill: "none" }),
    h('path', { d: "M12 2v18M10 10v2M14 10v2M6 20v2M18 20v2", fill: "none" })
  );
});

export default NibWardrobe;
