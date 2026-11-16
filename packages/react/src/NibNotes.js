import { createElement as h, forwardRef } from 'react';

export const NibNotes = forwardRef(function NibNotes({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M15 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13zM15 21v-3a1 1 0 0 1 1-1h3M9 8h6M9 12h4", fill: "none" })
  );
});

export default NibNotes;
