import { createElement as h, forwardRef } from 'react';

export const NibRegistered = forwardRef(function NibRegistered({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('path', { d: "M9.5 16.5v-9H13a2.5 2.5 0 0 1 0 5H9.5M12.5 12.5l2.5 4", fill: "none" })
  );
});

export default NibRegistered;
