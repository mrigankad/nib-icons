import { createElement as h, forwardRef } from 'react';

export const NibSwimming = forwardRef(function NibSwimming({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "17", cy: "7", r: "2", fill: "none" }),
    h('path', { d: "M4 12l5-3 3 3 4-2M2 16c2-1.5 3 1.5 5 0s3 1.5 5 0 3 1.5 5 0 3 1.5 5 0M2 20c2-1.5 3 1.5 5 0s3 1.5 5 0 3 1.5 5 0 3 1.5 5 0", fill: "none" })
  );
});

export default NibSwimming;
