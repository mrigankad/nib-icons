import { createElement as h, forwardRef } from 'react';

export const NibEggFried = forwardRef(function NibEggFried({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3c4 0 5 3 7 4s3 4 1 7-1 6-5 7-6-1-9-2-4-5-2-8 1-5 3-6 3-2 5-2z", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "3", fill: "none" })
  );
});

export default NibEggFried;
