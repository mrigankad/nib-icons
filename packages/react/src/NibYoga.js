import { createElement as h, forwardRef } from 'react';

export const NibYoga = forwardRef(function NibYoga({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "4.500", r: "2", fill: "none" }),
    h('path', { d: "M12 7.500V13", fill: "none" }),
    h('path', { d: "M4 10.500c3 1 5.500 1.500 8 1.500s5-.5 8-1.500", fill: "none" }),
    h('path', { d: "M3 19c3.500 0 7-1.500 9-6 2 4.500 5.500 6 9 6", fill: "none" })
  );
});

export default NibYoga;
