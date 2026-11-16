import { createElement as h, forwardRef } from 'react';

export const NibPizza = forwardRef(function NibPizza({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 22L3 6a15 15 0 0 1 18 0zM4.5 8.5a12 12 0 0 1 15 0", fill: "none" }),
    h('circle', { cx: "10", cy: "11", r: "1", fill: "none" }),
    h('circle', { cx: "14", cy: "12.5", r: "1", fill: "none" }),
    h('circle', { cx: "12", cy: "16", r: "1", fill: "none" })
  );
});

export default NibPizza;
