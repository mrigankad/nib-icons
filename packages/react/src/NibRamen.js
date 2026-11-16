import { createElement as h, forwardRef } from 'react';

export const NibRamen = forwardRef(function NibRamen({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 11h18a9 9 0 0 1-18 0zM9 20v2h6v-2M14 2l-2 9M18 3l-4 8", fill: "none" }),
    h('circle', { cx: "8", cy: "8", r: "2", fill: "none" })
  );
});

export default NibRamen;
