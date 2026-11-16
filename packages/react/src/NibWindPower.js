import { createElement as h, forwardRef } from 'react';

export const NibWindPower = forwardRef(function NibWindPower({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "8", cy: "8", r: "1.2", fill: "none" }),
    h('path', { d: "M8 6.8V2M9 8.6l4 2.4M7 8.6L3 11M7.6 9L7 22h2l-.6-13", fill: "none" }),
    h('circle', { cx: "17", cy: "11", r: "1", fill: "none" }),
    h('path', { d: "M17 10V6M18 11.5l3 1.5M16 11.5l-3 1.5M16.6 12L16 22h2l-.6-10", fill: "none" })
  );
});

export default NibWindPower;
