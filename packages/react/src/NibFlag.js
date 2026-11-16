import { createElement as h, forwardRef } from 'react';

export const NibFlag = forwardRef(function NibFlag({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 21V4M5 4h12l-2.5 4.5L17 13H5", fill: "none" })
  );
});

export default NibFlag;
