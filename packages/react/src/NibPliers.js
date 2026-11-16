import { createElement as h, forwardRef } from 'react';

export const NibPliers = forwardRef(function NibPliers({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3l3 7M15 3l-3 7", fill: "none" }),
    h('circle', { cx: "12", cy: "11", r: "1.5", fill: "none" }),
    h('path', { d: "M11 12.5L7 21M13 12.5L17 21M8.5 17.5L6.5 21M15.5 17.5l2 3.5", fill: "none" })
  );
});

export default NibPliers;
