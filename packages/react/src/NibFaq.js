import { createElement as h, forwardRef } from 'react';

export const NibFaq = forwardRef(function NibFaq({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 4h12v8H8l-3 3v-3H3zM7.5 6.5a1.5 1.5 0 1 1 2 1.4c-.4.2-.5.5-.5.9M9 10.5h.01M18 8h3v8h-2v3l-3-3h-6v-2", fill: "none" })
  );
});

export default NibFaq;
