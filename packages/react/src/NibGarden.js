import { createElement as h, forwardRef } from 'react';

export const NibGarden = forwardRef(function NibGarden({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 21h20M7 21v-6M7 15c-2 0-4-1-4-4 2 0 4 1 4 4zM7 13c0-2 1-4 4-4 0 2-1 4-4 4zM17 21v-8", fill: "none" }),
    h('circle', { cx: "17", cy: "9", r: "3", fill: "none" }),
    h('circle', { cx: "17", cy: "9", r: "1", fill: "none" })
  );
});

export default NibGarden;
