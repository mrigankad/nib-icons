import { createElement as h, forwardRef } from 'react';

export const NibConeShape = forwardRef(function NibConeShape({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2L4 18M12 2l8 16", fill: "none" }),
    h('ellipse', { cx: "12", cy: "18", rx: "8", ry: "3", fill: "none" })
  );
});

export default NibConeShape;
