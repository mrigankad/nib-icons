import { createElement as h, forwardRef } from 'react';

export const NibBed = forwardRef(function NibBed({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 5v15M2 16h20v4M22 16v-4a3 3 0 0 0-3-3h-8v7M2 12h9", fill: "none" }),
    h('circle', { cx: "6.5", cy: "9.5", r: "2", fill: "none" })
  );
});

export default NibBed;
