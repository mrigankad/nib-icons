import { createElement as h, forwardRef } from 'react';

export const NibShareSocial = forwardRef(function NibShareSocial({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "18", cy: "5", r: "3", fill: "none" }),
    h('circle', { cx: "6", cy: "12", r: "3", fill: "none" }),
    h('circle', { cx: "18", cy: "19", r: "3", fill: "none" }),
    h('path', { d: "M8.6 10.5l6.8-4M8.6 13.5l6.8 4", fill: "none" })
  );
});

export default NibShareSocial;
