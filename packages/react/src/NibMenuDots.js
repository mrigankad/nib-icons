import { createElement as h, forwardRef } from 'react';

export const NibMenuDots = forwardRef(function NibMenuDots({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 6h11M9 12h11M9 18h11", fill: "none" }),
    h('circle', { cx: "4.5", cy: "6", r: "1", fill: "currentColor" }),
    h('circle', { cx: "4.5", cy: "12", r: "1", fill: "currentColor" }),
    h('circle', { cx: "4.5", cy: "18", r: "1", fill: "currentColor" })
  );
});

export default NibMenuDots;
