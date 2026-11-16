import { createElement as h, forwardRef } from 'react';

export const NibFrost = forwardRef(function NibFrost({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v13M6.4 5.5l11.2 6.5M6.4 12l11.2-6.5M10 3.5l2 2 2-2M2 19h20M5 22l1-3M10 22l1-3M15 22l1-3", fill: "none" })
  );
});

export default NibFrost;
