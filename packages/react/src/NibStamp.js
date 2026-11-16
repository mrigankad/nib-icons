import { createElement as h, forwardRef } from 'react';

export const NibStamp = forwardRef(function NibStamp({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3h6v4a2 2 0 0 1-1 1.7V13h4a2 2 0 0 1 2 2v2H4v-2a2 2 0 0 1 2-2h4V8.7A2 2 0 0 1 9 7zM5 21h14", fill: "none" })
  );
});

export default NibStamp;
