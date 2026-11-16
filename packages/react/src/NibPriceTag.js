import { createElement as h, forwardRef } from 'react';

export const NibPriceTag = forwardRef(function NibPriceTag({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 5v6l-9 9a1.4 1.4 0 0 1-2 0l-5-5a1.4 1.4 0 0 1 0-2l9-9h6a1 1 0 0 1 1 1z", fill: "none" }),
    h('circle', { cx: "16.5", cy: "7.5", r: "1.5", fill: "none" })
  );
});

export default NibPriceTag;
