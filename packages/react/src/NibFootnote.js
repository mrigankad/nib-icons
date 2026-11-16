import { createElement as h, forwardRef } from 'react';

export const NibFootnote = forwardRef(function NibFootnote({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6V4h10v2M8 4v11M6 15h4M17 4.5l1.5-1v5M3 20h18", fill: "none" })
  );
});

export default NibFootnote;
