import { createElement as h, forwardRef } from 'react';

export const NibStickyNote = forwardRef(function NibStickyNote({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M15 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10zM15 21v-4a2 2 0 0 1 2-2h4", fill: "none" })
  );
});

export default NibStickyNote;
