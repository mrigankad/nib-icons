import { createElement as h, forwardRef } from 'react';

export const NibGasCylinder = forwardRef(function NibGasCylinder({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 9a5 5 0 0 1 10 0v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zM10 4V2h4v2M9 4h6M7 12h10", fill: "none" })
  );
});

export default NibGasCylinder;
