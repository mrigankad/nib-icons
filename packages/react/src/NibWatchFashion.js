import { createElement as h, forwardRef } from 'react';

export const NibWatchFashion = forwardRef(function NibWatchFashion({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "5", fill: "none" }),
    h('path', { d: "M12 10v2l1.5 1M9 7.5L9.5 2h5l.5 5.5M9 16.5L9.5 22h5l.5-5.5M17 11h1", fill: "none" })
  );
});

export default NibWatchFashion;
