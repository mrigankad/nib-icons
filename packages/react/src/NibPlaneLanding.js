import { createElement as h, forwardRef } from 'react';

export const NibPlaneLanding = forwardRef(function NibPlaneLanding({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 21h20M3 8l2-1 2 2 4-1-2-6 2-.5 5 6 5 1.5a2 2 0 0 1-1 3.5L5 11z", fill: "none" })
  );
});

export default NibPlaneLanding;
