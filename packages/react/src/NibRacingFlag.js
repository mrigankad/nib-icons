import { createElement as h, forwardRef } from 'react';

export const NibRacingFlag = forwardRef(function NibRacingFlag({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 22V3h16v11H4M4 8.5h16M9.3 3v11M14.7 3v11", fill: "none" }),
    h('path', { d: "M4 3h5.3v5.5H4zM14.7 3H20v5.5h-5.3zM9.3 8.5h5.4V14H9.3z", fill: "currentColor" })
  );
});

export default NibRacingFlag;
