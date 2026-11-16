import { createElement as h, forwardRef } from 'react';

export const NibParty = forwardRef(function NibParty({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M20.5 9A9 9 0 1 0 21 14", fill: "none" }),
    h('path', { d: "M7.5 10a1.5 1.5 0 0 1 3 0M13.5 10a1.5 1.5 0 0 1 3 0M13 14.5h9M22 12.5v4M8.5 14.5a3.5 3.5 0 0 0 4.5 2", fill: "none" })
  );
});

export default NibParty;
