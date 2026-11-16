import { createElement as h, forwardRef } from 'react';

export const NibBreadcrumb = forwardRef(function NibBreadcrumb({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 8h6l3 4-3 4H2zM13 8h5l3 4-3 4h-5l3-4z", fill: "none" })
  );
});

export default NibBreadcrumb;
