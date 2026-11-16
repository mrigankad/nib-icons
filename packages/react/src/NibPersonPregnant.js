import { createElement as h, forwardRef } from 'react';

export const NibPersonPregnant = forwardRef(function NibPersonPregnant({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "11", cy: "4.5", r: "2.2", fill: "none" }),
    h('path', { d: "M9.5 8.5h2.5c3.2 0 4.8 2.8 4.3 5.5-.3 1.5-1.2 2-2.5 2H9.5zM10.5 16v5M13.5 16v5M9.5 10.5L7.5 14", fill: "none" })
  );
});

export default NibPersonPregnant;
