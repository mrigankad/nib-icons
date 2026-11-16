import { createElement as h, forwardRef } from 'react';

export const NibBloodBag = forwardRef(function NibBloodBag({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 4h12v12a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4zM9 2h6v2M12 20v2M12 10c-1 1.5-2 2.5-2 3.5a2 2 0 0 0 4 0c0-1-1-2-2-3.5z", fill: "none" })
  );
});

export default NibBloodBag;
