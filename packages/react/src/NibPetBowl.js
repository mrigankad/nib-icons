import { createElement as h, forwardRef } from 'react';

export const NibPetBowl = forwardRef(function NibPetBowl({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 12h20l-2 7H4zM7 12V9.5M10 12V8M14 12V8.5M17 12V10", fill: "none" }),
    h('circle', { cx: "12", cy: "15.5", r: "1", fill: "none" })
  );
});

export default NibPetBowl;
