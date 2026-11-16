import { createElement as h, forwardRef } from 'react';

export const NibTablePlus = forwardRef(function NibTablePlus({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M13 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7M3 9h18M3 14.5h10M9 4v16M18 16v6M15 19h6", fill: "none" })
  );
});

export default NibTablePlus;
