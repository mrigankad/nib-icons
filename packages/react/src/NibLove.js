import { createElement as h, forwardRef } from 'react';

export const NibLove = forwardRef(function NibLove({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('path', { d: "M9 11.5s-2-1-2-2.3a1 1 0 0 1 2-.4 1 1 0 0 1 2 .4c0 1.3-2 2.3-2 2.3zM15 11.5s-2-1-2-2.3a1 1 0 0 1 2-.4 1 1 0 0 1 2 .4c0 1.3-2 2.3-2 2.3zM8.5 15a4 4 0 0 0 7 0", fill: "none" })
  );
});

export default NibLove;
