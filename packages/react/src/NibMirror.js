import { createElement as h, forwardRef } from 'react';

export const NibMirror = forwardRef(function NibMirror({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "10", rx: "7", ry: "8", fill: "none" }),
    h('path', { d: "M9 7l3-2M9 11l5-4M12 18v4M9 22h6", fill: "none" })
  );
});

export default NibMirror;
