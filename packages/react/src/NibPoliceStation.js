import { createElement as h, forwardRef } from 'react';

export const NibPoliceStation = forwardRef(function NibPoliceStation({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 21V9h16v12M2 21h20M2 9l10-6 10 6M12 11l1 2h2l-1.5 1.5.5 2-2-1-2 1 .5-2L9 13h2zM10 21v-2h4v2", fill: "none" })
  );
});

export default NibPoliceStation;
