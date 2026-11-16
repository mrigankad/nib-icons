import { createElement as h, forwardRef } from 'react';

export const NibHub = forwardRef(function NibHub({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "3", fill: "none" }),
    h('circle', { cx: "4.5", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "19.5", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "4.5", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "19.5", cy: "19", r: "2", fill: "none" }),
    h('path', { d: "M6 6.5l3.8 3.4M18 6.5l-3.8 3.4M6 17.5l3.8-3.4M18 17.5l-3.8-3.4", fill: "none" })
  );
});

export default NibHub;
