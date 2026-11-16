import { createElement as h, forwardRef } from 'react';

export const NibSchoolBuilding = forwardRef(function NibSchoolBuilding({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 21h20M4 21V11h16v10M12 2l8 5H4zM12 2v3M10 21v-4h4v4M7 14h1M16 14h1", fill: "none" }),
    h('circle', { cx: "12", cy: "9", r: "1", fill: "none" })
  );
});

export default NibSchoolBuilding;
