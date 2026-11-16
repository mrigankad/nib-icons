import { createElement as h, forwardRef } from 'react';

export const NibBarbell = forwardRef(function NibBarbell({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M1 12h22M4 6v12M7 4v16M17 4v16M20 6v12", fill: "none" })
  );
});

export default NibBarbell;
