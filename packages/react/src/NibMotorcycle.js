import { createElement as h, forwardRef } from 'react';

export const NibMotorcycle = forwardRef(function NibMotorcycle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "5.500", cy: "16", r: "3.500", fill: "none" }),
    h('circle', { cx: "18.500", cy: "16", r: "3.500", fill: "none" }),
    h('path', { d: "M5.500 16 10 9h5l3.500 7M10 9 8.500 6.500H6M15 9l1-3h2.500M10 16h4.500", fill: "none" })
  );
});

export default NibMotorcycle;
