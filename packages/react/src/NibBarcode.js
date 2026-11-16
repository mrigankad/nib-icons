import { createElement as h, forwardRef } from 'react';

export const NibBarcode = forwardRef(function NibBarcode({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 5v14M6.5 5v14M9 5v14M12.5 5v14M16 5v14M18.5 5v14M21 5v14", fill: "none" })
  );
});

export default NibBarcode;
