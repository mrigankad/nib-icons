import { createElement as h, forwardRef } from 'react';

export const NibRazor = forwardRef(function NibRazor({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 3h12v4H6zM6 5h12M12 7v15M10.5 12h3M10.5 16h3", fill: "none" })
  );
});

export default NibRazor;
