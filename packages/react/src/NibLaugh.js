import { createElement as h, forwardRef } from 'react';

export const NibLaugh = forwardRef(function NibLaugh({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('path', { d: "M7.5 10a1.5 1.5 0 0 1 3 0M13.5 10a1.5 1.5 0 0 1 3 0M7.5 13h9a4.5 4.5 0 0 1-9 0z", fill: "none" })
  );
});

export default NibLaugh;
