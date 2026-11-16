import { createElement as h, forwardRef } from 'react';

export const NibBrain = forwardRef(function NibBrain({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 5a3 3 0 0 0-5.5-1.5A3 3 0 0 0 4 8a3 3 0 0 0 0 5 3.5 3.5 0 0 0 3 5.5A3 3 0 0 0 12 20zM12 5a3 3 0 0 1 5.5-1.5A3 3 0 0 1 20 8a3 3 0 0 1 0 5 3.5 3.5 0 0 1-3 5.5A3 3 0 0 1 12 20zM12 5v15M8 9a2 2 0 0 1 2 2M16 13a2 2 0 0 1-2 2", fill: "none" })
  );
});

export default NibBrain;
