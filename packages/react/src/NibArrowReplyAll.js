import { createElement as h, forwardRef } from 'react';

export const NibArrowReplyAll = forwardRef(function NibArrowReplyAll({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 6l-5 5 5 5M12 6l-5 5 5 5M7 11h7a6 6 0 0 1 6 6v2", fill: "none" })
  );
});

export default NibArrowReplyAll;
