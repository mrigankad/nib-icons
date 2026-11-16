import { createElement as h, forwardRef } from 'react';

export const NibTimesheet = forwardRef(function NibTimesheet({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5M3 8h16M8 3v18", fill: "none" }),
    h('circle', { cx: "17", cy: "17", r: "4.5", fill: "none" }),
    h('path', { d: "M17 15v2l1.3 1.3", fill: "none" })
  );
});

export default NibTimesheet;
