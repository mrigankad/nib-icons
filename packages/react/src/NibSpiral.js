import { createElement as h, forwardRef } from 'react';

export const NibSpiral = forwardRef(function NibSpiral({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 12a1.5 1.5 0 1 1 1.5 1.5 3 3 0 0 1-3-3 4.5 4.5 0 0 1 4.5-4.5 6 6 0 0 1 6 6 7.5 7.5 0 0 1-7.5 7.5A9 9 0 0 1 4.5 10.5", fill: "none" })
  );
});

export default NibSpiral;
