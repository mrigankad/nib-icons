import { createElement as h, forwardRef } from 'react';

export const NibMaintenance = forwardRef(function NibMaintenance({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14.5 6.5a4 4 0 0 1 5-5l-2.5 2.5.5 2 2 .5 2.5-2.5a4 4 0 0 1-5 5L8 19a2 2 0 0 1-3-3z", fill: "none" }),
    h('circle', { cx: "6.5", cy: "17.5", r: ".5", fill: "none" })
  );
});

export default NibMaintenance;
