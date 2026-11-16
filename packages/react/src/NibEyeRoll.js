import { createElement as h, forwardRef } from 'react';

export const NibEyeRoll = forwardRef(function NibEyeRoll({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('circle', { cx: "9", cy: "10", r: "2", fill: "none" }),
    h('circle', { cx: "15", cy: "10", r: "2", fill: "none" }),
    h('path', { d: "M9 8.8h.01M15 8.8h.01M9.5 16h5", fill: "none" })
  );
});

export default NibEyeRoll;
