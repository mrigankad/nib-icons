import { createElement as h, forwardRef } from 'react';

export const NibHighlight = forwardRef(function NibHighlight({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 11l-5 5v3h4l5-5M9 11l6-6 4 4-6 6zM14 20h7", fill: "none" })
  );
});

export default NibHighlight;
