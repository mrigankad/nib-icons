import { createElement as h, forwardRef } from 'react';

export const NibRoti = forwardRef(function NibRoti({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('path', { d: "M8 9h.01M15 8h.01M10 14h.01M16 14h.01M12 11h.01M8 16h.01", fill: "none" })
  );
});

export default NibRoti;
