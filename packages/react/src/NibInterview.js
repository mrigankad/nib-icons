import { createElement as h, forwardRef } from 'react';

export const NibInterview = forwardRef(function NibInterview({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "12", r: "2.5", fill: "none" }),
    h('circle', { cx: "18", cy: "12", r: "2.5", fill: "none" }),
    h('path', { d: "M2 21a4 4 0 0 1 8 0M14 21a4 4 0 0 1 8 0M9 3h6v4h-3l-2 1.5V7H9z", fill: "none" })
  );
});

export default NibInterview;
