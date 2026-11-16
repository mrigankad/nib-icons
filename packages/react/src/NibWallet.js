import { createElement as h, forwardRef } from 'react';

export const NibWallet = forwardRef(function NibWallet({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M17 9V5H5a2 2 0 0 0 0 4h15v11H5a2 2 0 0 1-2-2V7M16.5 14.5h.01", fill: "none" })
  );
});

export default NibWallet;
