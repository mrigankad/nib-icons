import { createElement as h, forwardRef } from 'react';

export const NibGlobeTravel = forwardRef(function NibGlobeTravel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "11", cy: "13", r: "8", fill: "none" }),
    h('path', { d: "M3 13h16M11 5a12 12 0 0 1 0 16M11 5a12 12 0 0 0 0 16M15 4l3-2 1 3-2 1", fill: "none" }),
    h('path', { d: "M14 4.5L21 2", fill: "none", strokeDasharray: "1.5 1.5" })
  );
});

export default NibGlobeTravel;
