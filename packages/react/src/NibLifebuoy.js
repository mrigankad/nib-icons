import { createElement as h, forwardRef } from 'react';

export const NibLifebuoy = forwardRef(function NibLifebuoy({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "4", fill: "none" }),
    h('path', { d: "M5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6", fill: "none" })
  );
});

export default NibLifebuoy;
