import { createElement as h, forwardRef } from 'react';

export const NibEdit = forwardRef(function NibEdit({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 20h8M4 20v-3.5L15.5 5a2.1 2.1 0 0 1 3 3L7 20.5H4zM14 6.5l3.5 3.5", fill: "none" })
  );
});

export default NibEdit;
