import { createElement as h, forwardRef } from 'react';

export const NibTransformer = forwardRef(function NibTransformer({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "7", width: "14", height: "13", rx: "1", fill: "none" }),
    h('path', { d: "M8 7V3M12 7V3M16 7V3M5 11H2M5 15H2M19 11h3M19 15h3M8 20v2M16 20v2", fill: "none" })
  );
});

export default NibTransformer;
