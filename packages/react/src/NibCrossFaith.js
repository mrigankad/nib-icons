import { createElement as h, forwardRef } from 'react';

export const NibCrossFaith = forwardRef(function NibCrossFaith({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 2h4v6h5v4h-5v10h-4V12H5V8h5z", fill: "none" })
  );
});

export default NibCrossFaith;
