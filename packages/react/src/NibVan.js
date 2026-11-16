import { createElement as h, forwardRef } from 'react';

export const NibVan = forwardRef(function NibVan({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 17H2V6h13l4 4 3 2v5h-1M9 17h6M2 11h20M15 6v5", fill: "none" }),
    h('circle', { cx: "7", cy: "17", r: "2", fill: "none" }),
    h('circle', { cx: "17", cy: "17", r: "2", fill: "none" })
  );
});

export default NibVan;
