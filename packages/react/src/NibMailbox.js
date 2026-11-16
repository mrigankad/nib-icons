import { createElement as h, forwardRef } from 'react';

export const NibMailbox = forwardRef(function NibMailbox({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 7a4 4 0 0 0-4 4v5h18v-5a4 4 0 0 0-4-4zM7 7a4 4 0 0 1 4 4v5M12 16v6M14 7V3h4v2h-4M7 11h.01", fill: "none" })
  );
});

export default NibMailbox;
