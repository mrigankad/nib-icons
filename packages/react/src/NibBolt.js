import { createElement as h, forwardRef } from 'react';

export const NibBolt = forwardRef(function NibBolt({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 2h10v5H7zM9 7h6v14H9zM9 10l6 2M9 13l6 2M9 16l6 2", fill: "none" })
  );
});

export default NibBolt;
