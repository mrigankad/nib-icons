import { createElement as h, forwardRef } from 'react';

export const NibVeena = forwardRef(function NibVeena({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "5", cy: "17", r: "3.5", fill: "none" }),
    h('circle', { cx: "19", cy: "7", r: "2.5", fill: "none" }),
    h('path', { d: "M7.5 14.5l9.7-5.7M6 13L17 6.5M8.5 16l9.5-7", fill: "none" })
  );
});

export default NibVeena;
