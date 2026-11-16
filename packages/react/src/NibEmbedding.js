import { createElement as h, forwardRef } from 'react';

export const NibEmbedding = forwardRef(function NibEmbedding({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21V3M3 21h18M3 21l7-7M3 21l12-4M3 21l4-12", fill: "none" }),
    h('circle', { cx: "10", cy: "14", r: "1", fill: "none" }),
    h('circle', { cx: "15", cy: "17", r: "1", fill: "none" }),
    h('circle', { cx: "7", cy: "9", r: "1", fill: "none" })
  );
});

export default NibEmbedding;
