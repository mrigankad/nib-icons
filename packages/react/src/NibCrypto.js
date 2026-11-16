import { createElement as h, forwardRef } from 'react';

export const NibCrypto = forwardRef(function NibCrypto({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('path', { d: "M9 8h4a2 2 0 0 1 0 4H9h5a2 2 0 0 1 0 4H9zM11 6.5V8M11 16v1.5", fill: "none" })
  );
});

export default NibCrypto;
