import { createElement as h, forwardRef } from 'react';

export const NibFireplace = forwardRef(function NibFireplace({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 4h20v3H2zM4 7v14M20 7v14M2 21h20M7 21v-8a5 5 0 0 1 10 0v8M12 20a2 2 0 0 1-2-2c0-1.5 2-2.5 2-4 0 1.5 2 2.5 2 4a2 2 0 0 1-2 2z", fill: "none" })
  );
});

export default NibFireplace;
