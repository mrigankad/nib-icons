import { createElement as h, forwardRef } from 'react';

export const NibGrin = forwardRef(function NibGrin({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('path', { d: "M9 9.5h.01M15 9.5h.01M7.5 13.5h9a4.5 3.5 0 0 1-9 0zM8 15h8", fill: "none" })
  );
});

export default NibGrin;
