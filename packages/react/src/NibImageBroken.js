import { createElement as h, forwardRef } from 'react';

export const NibImageBroken = forwardRef(function NibImageBroken({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 12V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3M3 14l4-1 3 3 4-3 3 2 4-1", fill: "none" }),
    h('circle', { cx: "8.5", cy: "8", r: "1.5", fill: "none" })
  );
});

export default NibImageBroken;
