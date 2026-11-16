import { createElement as h, forwardRef } from 'react';

export const NibMonkeyFace = forwardRef(function NibMonkeyFace({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12.5", r: "7", fill: "none" }),
    h('circle', { cx: "3.5", cy: "11", r: "2", fill: "none" }),
    h('circle', { cx: "20.5", cy: "11", r: "2", fill: "none" }),
    h('path', { d: "M10 11h.01M14 11h.01M9 15.5a3 2.5 0 0 0 6 0 3 2.5 0 0 0-6 0", fill: "none" })
  );
});

export default NibMonkeyFace;
