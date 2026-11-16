import { createElement as h, forwardRef } from 'react';

export const NibRag = forwardRef(function NibRag({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 4h7v16H3zM6 8h1M6 12h1M14 12h7M18 9l3 3-3 3", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "2", fill: "none" })
  );
});

export default NibRag;
