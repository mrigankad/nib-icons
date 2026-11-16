import { createElement as h, forwardRef } from 'react';

export const NibPersonThinking = forwardRef(function NibPersonThinking({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "8", cy: "10", r: "3", fill: "none" }),
    h('path', { d: "M2 21a6 6 0 0 1 12 0", fill: "none" }),
    h('circle', { cx: "18.5", cy: "5.5", r: "3", fill: "none" }),
    h('circle', { cx: "14", cy: "9.5", r: ".8", fill: "none" })
  );
});

export default NibPersonThinking;
