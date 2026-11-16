import { createElement as h, forwardRef } from 'react';

export const NibSwitch = forwardRef(function NibSwitch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 18h16M8 18l5-9", fill: "none" }),
    h('circle', { cx: "14.5", cy: "6.5", r: "2.5", fill: "none" })
  );
});

export default NibSwitch;
