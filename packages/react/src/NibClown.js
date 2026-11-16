import { createElement as h, forwardRef } from 'react';

export const NibClown = forwardRef(function NibClown({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('circle', { cx: "12", cy: "12.5", r: "1.5", fill: "none" }),
    h('path', { d: "M9 7.5v2.5M15 7.5v2.5M7.5 15a5 5 0 0 0 9 0", fill: "none" })
  );
});

export default NibClown;
