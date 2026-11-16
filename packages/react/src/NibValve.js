import { createElement as h, forwardRef } from 'react';

export const NibValve = forwardRef(function NibValve({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 14h6M16 14h6M2 11v6M22 11v6M8 11l8 6V11l-8 6zM12 14V7M8 4h8", fill: "none" })
  );
});

export default NibValve;
