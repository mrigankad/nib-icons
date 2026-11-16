import { createElement as h, forwardRef } from 'react';

export const NibInfluencer = forwardRef(function NibInfluencer({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "10", cy: "8", r: "4", fill: "none" }),
    h('path', { d: "M3 21a7 7 0 0 1 14 0M19 3l.7 1.8 1.8.7-1.8.7L19 8l-.7-1.8-1.8-.7 1.8-.7z", fill: "none" })
  );
});

export default NibInfluencer;
