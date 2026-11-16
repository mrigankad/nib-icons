import { createElement as h, forwardRef } from 'react';

export const NibWaterPolo = forwardRef(function NibWaterPolo({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "18", cy: "5", r: "2.5", fill: "none" }),
    h('circle', { cx: "10", cy: "9", r: "2", fill: "none" }),
    h('path', { d: "M10 12v3M10 13l5-6M2 17c2-1.5 3 1.5 5 0s3 1.5 5 0 3 1.5 5 0 3 1.5 5 0M2 21c2-1.5 3 1.5 5 0s3 1.5 5 0 3 1.5 5 0 3 1.5 5 0", fill: "none" })
  );
});

export default NibWaterPolo;
