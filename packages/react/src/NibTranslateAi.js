import { createElement as h, forwardRef } from 'react';

export const NibTranslateAi = forwardRef(function NibTranslateAi({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 5h9M7.5 3v2M5 5c1 4 3 6 6 7M10 5c-1 4-3 6-6 7M13 21l4-9 4 9M14.5 18h5M19 3l.6 1.4L21 5l-1.4.6L19 7l-.6-1.4L17 5l1.4-.6z", fill: "none" })
  );
});

export default NibTranslateAi;
