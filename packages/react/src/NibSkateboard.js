import { createElement as h, forwardRef } from 'react';

export const NibSkateboard = forwardRef(function NibSkateboard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2.500 8c0 2 1.500 3.500 3.500 3.500h12c2 0 3.500-1.500 3.500-3.500z", fill: "none" }),
    h('path', { d: "M7 11.500V14M17 11.500V14", fill: "none" }),
    h('circle', { cx: "7", cy: "16.500", r: "2", fill: "none" }),
    h('circle', { cx: "17", cy: "16.500", r: "2", fill: "none" })
  );
});

export default NibSkateboard;
