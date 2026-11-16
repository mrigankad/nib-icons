import { createElement as h, forwardRef } from 'react';

export const NibDirections = forwardRef(function NibDirections({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l10 10-10 10L2 12zM9 14v-2a2 2 0 0 1 2-2h4M13 8l2 2-2 2", fill: "none" })
  );
});

export default NibDirections;
