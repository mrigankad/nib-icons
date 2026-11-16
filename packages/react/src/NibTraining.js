import { createElement as h, forwardRef } from 'react';

export const NibTraining = forwardRef(function NibTraining({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3v18h18M6 8c3 0 4 6 7 8s5 1 7-1", fill: "none" }),
    h('circle', { cx: "20", cy: "15", r: "1", fill: "none" })
  );
});

export default NibTraining;
