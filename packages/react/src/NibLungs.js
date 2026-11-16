import { createElement as h, forwardRef } from 'react';

export const NibLungs = forwardRef(function NibLungs({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v9M12 9l-2 2M12 9l2 2M9 6C6 6 3 11 3 17a3 3 0 0 0 4 3l2-1V8M15 6c3 0 6 5 6 11a3 3 0 0 1-4 3l-2-1V8", fill: "none" })
  );
});

export default NibLungs;
