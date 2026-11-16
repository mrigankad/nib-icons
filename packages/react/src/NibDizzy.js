import { createElement as h, forwardRef } from 'react';

export const NibDizzy = forwardRef(function NibDizzy({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('path', { d: "M8 8.5l2 2M10 8.5l-2 2M14 8.5l2 2M16 8.5l-2 2", fill: "none" }),
    h('circle', { cx: "12", cy: "15.5", r: "1.5", fill: "none" })
  );
});

export default NibDizzy;
