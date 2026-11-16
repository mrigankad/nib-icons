import { createElement as h, forwardRef } from 'react';

export const NibPebble = forwardRef(function NibPebble({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "9", cy: "15", rx: "6", ry: "4", fill: "none" }),
    h('ellipse', { cx: "17", cy: "9", rx: "4", ry: "3", fill: "none" })
  );
});

export default NibPebble;
