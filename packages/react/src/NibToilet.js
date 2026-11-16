import { createElement as h, forwardRef } from 'react';

export const NibToilet = forwardRef(function NibToilet({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6.5", cy: "4", r: "1.5", fill: "none" }),
    h('circle', { cx: "17.5", cy: "4", r: "1.5", fill: "none" }),
    h('path', { d: "M12 2v20M4.5 8h4v6h-1v7h-2v-7h-1zM17.5 8l-3 8h6zM16.5 16v5M18.5 16v5", fill: "none" })
  );
});

export default NibToilet;
