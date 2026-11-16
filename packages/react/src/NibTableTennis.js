import { createElement as h, forwardRef } from 'react';

export const NibTableTennis = forwardRef(function NibTableTennis({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14.5 15.5a6 6 0 1 0-6-6c0 2 1 3.5 2 4.5l-6 6 1.5 1.5 6-6c1 1 1.5 0 2.5 0z", fill: "none" }),
    h('circle', { cx: "19", cy: "18", r: "2", fill: "none" })
  );
});

export default NibTableTennis;
