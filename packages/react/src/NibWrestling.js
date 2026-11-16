import { createElement as h, forwardRef } from 'react';

export const NibWrestling = forwardRef(function NibWrestling({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "18", cy: "5", r: "2", fill: "none" }),
    h('path', { d: "M6 8l2 5-2 8M18 8l-2 5 2 8M7 10l5 2 5-2M8 13l-3 1M16 13l3 1", fill: "none" })
  );
});

export default NibWrestling;
