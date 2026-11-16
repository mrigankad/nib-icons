import { createElement as h, forwardRef } from 'react';

export const NibTelescope = forwardRef(function NibTelescope({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 12l14-8 2 4-14 8zM17 4l2-1 2 4-2 1M11 13l-3 9M13 12l3 10", fill: "none" })
  );
});

export default NibTelescope;
