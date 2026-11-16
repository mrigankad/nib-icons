import { createElement as h, forwardRef } from 'react';

export const NibBaby = forwardRef(function NibBaby({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12.5", r: "8.5", fill: "none" }),
    h('path', { d: "M9.5 11.5h.01M14.5 11.5h.01M10 15.5a3 3 0 0 0 4 0M12 4c-1.2 1-1 2.6.5 2.8", fill: "none" })
  );
});

export default NibBaby;
