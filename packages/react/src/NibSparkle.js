import { createElement as h, forwardRef } from 'react';

export const NibSparkle = forwardRef(function NibSparkle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3c.7 5 2 8.3 9 9-7 .7-8.3 2-9 9-.7-7-2-8.3-9-9 7-.7 8.3-4 9-9z", fill: "none" })
  );
});

export default NibSparkle;
