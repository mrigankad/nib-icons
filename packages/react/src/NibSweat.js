import { createElement as h, forwardRef } from 'react';

export const NibSweat = forwardRef(function NibSweat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21.5 11A9.5 9.5 0 1 1 15 3", fill: "none" }),
    h('path', { d: "M9 9.5h.01M15 9.5h.01M8 14a4.5 4.5 0 0 0 8 0M19.5 3c-1.2 1.6-1.2 2.6 0 3.3 1.2-.7 1.2-1.7 0-3.3z", fill: "none" })
  );
});

export default NibSweat;
