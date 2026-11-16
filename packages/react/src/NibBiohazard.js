import { createElement as h, forwardRef } from 'react';

export const NibBiohazard = forwardRef(function NibBiohazard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "13", r: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "7.5", r: "4.5", fill: "none" }),
    h('circle', { cx: "7.2", cy: "15.8", r: "4.5", fill: "none" }),
    h('circle', { cx: "16.8", cy: "15.8", r: "4.5", fill: "none" })
  );
});

export default NibBiohazard;
