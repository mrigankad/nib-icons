import { createElement as h, forwardRef } from 'react';

export const NibColourSplash = forwardRef(function NibColourSplash({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 4c2 0 2.500 2 4 2.500s4 0 4.500 2.500-2 3-1.500 5S16.500 19 14 18.500 10.500 21 8.500 19 6 16 4.500 14 5.500 9.500 7 8 10 4 12 4z", fill: "none" }),
    h('circle', { cx: "4.500", cy: "5", r: "1", fill: "none" }),
    h('circle', { cx: "20", cy: "20", r: "1", fill: "none" })
  );
});

export default NibColourSplash;
