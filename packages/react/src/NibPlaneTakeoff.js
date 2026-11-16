import { createElement as h, forwardRef } from 'react';

export const NibPlaneTakeoff = forwardRef(function NibPlaneTakeoff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 21h20M4 15l3 2 14-6a2 2 0 0 0-2-3l-5 2-6-4-2 1 4 4-4 2-2-1-1 1z", fill: "none" })
  );
});

export default NibPlaneTakeoff;
