import { createElement as h, forwardRef } from 'react';

export const NibPotion = forwardRef(function NibPotion({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 2h6M10 2v6a7 7 0 1 0 4 0V2M5.5 14h13", fill: "none" }),
    h('circle', { cx: "10", cy: "17", r: ".8", fill: "none" }),
    h('circle', { cx: "14", cy: "18", r: ".8", fill: "none" })
  );
});

export default NibPotion;
