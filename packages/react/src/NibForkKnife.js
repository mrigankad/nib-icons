import { createElement as h, forwardRef } from 'react';

export const NibForkKnife = forwardRef(function NibForkKnife({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 2v6a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2M7 2v20M17 22V2c-2 1-3 4-3 8v3h3", fill: "none" })
  );
});

export default NibForkKnife;
