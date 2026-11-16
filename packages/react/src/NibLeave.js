import { createElement as h, forwardRef } from 'react';

export const NibLeave = forwardRef(function NibLeave({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7zM12 10l-4 11M2 21h20", fill: "none" })
  );
});

export default NibLeave;
