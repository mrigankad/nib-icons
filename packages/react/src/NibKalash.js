import { createElement as h, forwardRef } from 'react';

export const NibKalash = forwardRef(function NibKalash({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9.5 8.5V10C5.5 11 4.5 15.5 7 18.5C9 20.5 15 20.5 17 18.5C19.5 15.5 18.5 11 14.5 10V8.5Z", fill: "none" }),
    h('circle', { cx: "12", cy: "5.5", r: "2.5", fill: "none" }),
    h('path', { d: "M9.5 8.5C6.5 7.5 5 5.5 5.5 3.5C8 3.5 9.5 5.5 9.5 8.5Z", fill: "none" }),
    h('path', { d: "M14.5 8.5C17.5 7.5 19 5.5 18.5 3.5C16 3.5 14.5 5.5 14.5 8.5Z", fill: "none" })
  );
});

export default NibKalash;
