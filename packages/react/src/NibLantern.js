import { createElement as h, forwardRef } from 'react';

export const NibLantern = forwardRef(function NibLantern({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v2M9 4h6M7 7h10l-1-3H8zM7 7c-1 3-1 8 0 11h10c1-3 1-8 0-11M8 18l1 2h6l1-2M12 9c-1 1-1.5 2-1.5 3a1.5 1.5 0 0 0 3 0c0-1-.5-2-1.5-3zM12 20v2", fill: "none" })
  );
});

export default NibLantern;
