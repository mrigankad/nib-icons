import { createElement as h, forwardRef } from 'react';

export const NibArrowsExpand = forwardRef(function NibArrowsExpand({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M15 3h6v6M21 3l-7 7M9 21H3v-6M3 21l7-7", fill: "none" })
  );
});

export default NibArrowsExpand;
