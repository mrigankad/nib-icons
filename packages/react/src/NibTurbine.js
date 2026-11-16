import { createElement as h, forwardRef } from 'react';

export const NibTurbine = forwardRef(function NibTurbine({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "1.5", fill: "none" }),
    h('path', { d: "M12 10.5C12 7 14 5 16 5M13.5 12c3.5 0 5.5 2 5.5 4M12 13.5c0 3.5-2 5.5-4 5.5M10.5 12C7 12 5 10 5 8", fill: "none" })
  );
});

export default NibTurbine;
