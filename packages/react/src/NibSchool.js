import { createElement as h, forwardRef } from 'react';

export const NibSchool = forwardRef(function NibSchool({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 21h20M4 21V10l8-6 8 6v11M10 21v-5h4v5M12 4V1h3", fill: "none" }),
    h('circle', { cx: "12", cy: "11", r: "2", fill: "none" })
  );
});

export default NibSchool;
