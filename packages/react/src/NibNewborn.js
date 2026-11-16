import { createElement as h, forwardRef } from 'react';

export const NibNewborn = forwardRef(function NibNewborn({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "10", r: "6", fill: "none" }),
    h('path', { d: "M12 4c1 0 2-1 1.5-2M10 9.5h.01M14 9.5h.01M10.5 12.5c1 .7 2 .7 3 0M8 16c-2 1-3 3-3 5h14c0-2-1-4-3-5", fill: "none" })
  );
});

export default NibNewborn;
