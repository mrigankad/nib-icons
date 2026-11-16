import { createElement as h, forwardRef } from 'react';

export const NibUnlink = forwardRef(function NibUnlink({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M17 13.5l2.4-2.5a4.5 4.5 0 0 0-6.4-6.4L10.5 7M7 10.5L4.6 13a4.5 4.5 0 0 0 6.4 6.4l2.5-2.4M8 2v2.5M2 8h2.5M16 22v-2.5M22 16h-2.5", fill: "none" })
  );
});

export default NibUnlink;
