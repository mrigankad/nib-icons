import { createElement as h, forwardRef } from 'react';

export const NibGoal = forwardRef(function NibGoal({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M19.5 9A8.5 8.5 0 1 1 15 4.5M15.5 10a4 4 0 1 1-1.5-1.5M12 12l7-7M16 5h3v3", fill: "none" })
  );
});

export default NibGoal;
