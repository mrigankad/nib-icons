import { createElement as h, forwardRef } from 'react';

export const NibStethoscope = forwardRef(function NibStethoscope({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 3H4v6a5 5 0 0 0 10 0V3h-1M9 14v2a5 5 0 0 0 10 0v-3", fill: "none" }),
    h('circle', { cx: "19", cy: "11", r: "2", fill: "none" })
  );
});

export default NibStethoscope;
