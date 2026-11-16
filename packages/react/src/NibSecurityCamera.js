import { createElement as h, forwardRef } from 'react';

export const NibSecurityCamera = forwardRef(function NibSecurityCamera({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 5h18M5 5v3a7 7 0 0 0 14 0V5", fill: "none" }),
    h('circle', { cx: "12", cy: "9.5", r: "2.5", fill: "none" })
  );
});

export default NibSecurityCamera;
