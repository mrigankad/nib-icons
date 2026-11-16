import { createElement as h, forwardRef } from 'react';

export const NibGlue = forwardRef(function NibGlue({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 10h8v11a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zM10 10V7h4v3M12 7V2M10 15h4", fill: "none" })
  );
});

export default NibGlue;
