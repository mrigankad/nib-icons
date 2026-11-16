import { createElement as h, forwardRef } from 'react';

export const NibRake = forwardRef(function NibRake({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 22V8M5 8h14M5 8V3M8.5 8V3M12 8V3M15.5 8V3M19 8V3", fill: "none" })
  );
});

export default NibRake;
