import { createElement as h, forwardRef } from 'react';

export const NibTeacher = forwardRef(function NibTeacher({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "8", r: "2.5", fill: "none" }),
    h('path', { d: "M2 21v-4a4 4 0 0 1 7-2.6L14 11M11 3h11v11h-6M14 7h5", fill: "none" })
  );
});

export default NibTeacher;
