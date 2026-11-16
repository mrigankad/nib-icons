import { createElement as h, forwardRef } from 'react';

export const NibSewingMachine = forwardRef(function NibSewingMachine({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 20h20M4 20v-4h16v4M6 16V8a3 3 0 0 1 3-3h10v11M6 9h10v4M14 13v3", fill: "none" }),
    h('circle', { cx: "18", cy: "9", r: "1", fill: "none" })
  );
});

export default NibSewingMachine;
