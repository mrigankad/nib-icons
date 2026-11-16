import { createElement as h, forwardRef } from 'react';

export const NibHandOk = forwardRef(function NibHandOk({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "8", cy: "9", r: "3", fill: "none" }),
    h('path', { d: "M11 9V4.5a1.5 1.5 0 0 1 3 0V10M14 6.5a1.5 1.5 0 0 1 3 0V11M17 9a1.5 1.5 0 0 1 3 0v4a8 8 0 0 1-8 8h-.5a5.5 5.5 0 0 1-5.3-4L5.5 15", fill: "none" })
  );
});

export default NibHandOk;
