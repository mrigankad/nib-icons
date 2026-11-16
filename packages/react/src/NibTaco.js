import { createElement as h, forwardRef } from 'react';

export const NibTaco = forwardRef(function NibTaco({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2.5 19.5a9.5 9.5 0 0 1 19 0z", fill: "none" }),
    h('path', { d: "M7 19.5a5 5 0 0 1 10 0", fill: "none" }),
    h('circle', { cx: "7.5", cy: "8.3", r: "1.6", fill: "none" }),
    h('circle', { cx: "12", cy: "6.3", r: "1.6", fill: "none" }),
    h('circle', { cx: "16.5", cy: "8.3", r: "1.6", fill: "none" })
  );
});

export default NibTaco;
