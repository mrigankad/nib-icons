import { createElement as h, forwardRef } from 'react';

export const NibHr = forwardRef(function NibHr({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "7", r: "3.5", fill: "none" }),
    h('path', { d: "M5 21a7 7 0 0 1 14 0M12 15.5c-1.5-1.5-3-.5-3 .8 0 1.4 3 3 3 3s3-1.6 3-3c0-1.3-1.5-2.3-3-.8z", fill: "none" })
  );
});

export default NibHr;
