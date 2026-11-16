import { createElement as h, forwardRef } from 'react';

export const NibExtract = forwardRef(function NibExtract({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7M6 8h5M6 12h3M6 16h4M14 12h7M18 9l3 3-3 3", fill: "none" })
  );
});

export default NibExtract;
