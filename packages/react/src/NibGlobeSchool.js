import { createElement as h, forwardRef } from 'react';

export const NibGlobeSchool = forwardRef(function NibGlobeSchool({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "9", r: "6", fill: "none" }),
    h('path', { d: "M6 9h12M12 3a9 9 0 0 1 0 12M12 3a9 9 0 0 0 0 12M18.5 4a8.5 8.5 0 0 1-12 12.5M12 17v4M8 21h8", fill: "none" })
  );
});

export default NibGlobeSchool;
