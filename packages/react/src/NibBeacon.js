import { createElement as h, forwardRef } from 'react';

export const NibBeacon = forwardRef(function NibBeacon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 21l1.5-9h5l1.5 9zM9.5 12V9a2.5 2.5 0 0 1 5 0v3M3 7l3 1M21 7l-3 1M12 2.5v1.5M6 21h12", fill: "none" })
  );
});

export default NibBeacon;
