import { createElement as h, forwardRef } from 'react';

export const NibDosa = forwardRef(function NibDosa({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "18", rx: "10", ry: "3", fill: "none" }),
    h('path', { d: "M3.5 14.5L16.8 7", fill: "none" }),
    h('path', { d: "M3.5 14.5l16-3.2", fill: "none" }),
    h('ellipse', { cx: "18.3", cy: "9.2", rx: "1.5", ry: "2.9", transform: "rotate(-30 18.3 9.2)", fill: "none" }),
    h('path', { d: "M2.5 4h6a3 3 0 0 1-6 0z", fill: "none" })
  );
});

export default NibDosa;
