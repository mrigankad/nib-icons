import { createElement as h, forwardRef } from 'react';

export const NibBranchProtect = forwardRef(function NibBranchProtect({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6zM10 8v7.5M14.5 9v.5a2 2 0 0 1-2 2H10", fill: "none" })
  );
});

export default NibBranchProtect;
