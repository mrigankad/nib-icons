import { createElement as h, forwardRef } from 'react';

export const NibKeys = forwardRef(function NibKeys({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "7", cy: "8", r: "3.5", fill: "none" }),
    h('circle', { cx: "16.5", cy: "7", r: "3", fill: "none" }),
    h('path', { d: "M9.5 10.5L18 19M15 16l1.5-1.5M17 18l1.5-1.5M16.5 10v11M16.5 14h2M16.5 17h1.5", fill: "none" })
  );
});

export default NibKeys;
