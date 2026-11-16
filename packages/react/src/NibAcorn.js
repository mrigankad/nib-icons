import { createElement as h, forwardRef } from 'react';

export const NibAcorn = forwardRef(function NibAcorn({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 10a7 4 0 0 1 14 0zM6 10c0 6 3 10 6 11 3-1 6-5 6-11M12 6V3l2-1", fill: "none" })
  );
});

export default NibAcorn;
