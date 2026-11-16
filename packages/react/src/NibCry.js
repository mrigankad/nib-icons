import { createElement as h, forwardRef } from 'react';

export const NibCry = forwardRef(function NibCry({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('path', { d: "M9 9.5h.01M15 9.5h.01M8.5 17a4 4 0 0 1 7 0M8.5 12c-.8 1-.8 1.8 0 2.3.8-.5.8-1.3 0-2.3z", fill: "none" })
  );
});

export default NibCry;
