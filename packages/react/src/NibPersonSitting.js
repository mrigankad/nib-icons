import { createElement as h, forwardRef } from 'react';

export const NibPersonSitting = forwardRef(function NibPersonSitting({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "11.5", cy: "4.5", r: "2.2", fill: "none" }),
    h('path', { d: "M11.5 8.5V15h6.5v6M11.5 10.5l4 2.5M7 8v13M7 18h6", fill: "none" })
  );
});

export default NibPersonSitting;
