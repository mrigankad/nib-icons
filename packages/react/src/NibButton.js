import { createElement as h, forwardRef } from 'react';

export const NibButton = forwardRef(function NibButton({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "6", fill: "none" }),
    h('circle', { cx: "10.5", cy: "10.5", r: ".8", fill: "none" }),
    h('circle', { cx: "13.5", cy: "10.5", r: ".8", fill: "none" }),
    h('circle', { cx: "10.5", cy: "13.5", r: ".8", fill: "none" }),
    h('circle', { cx: "13.5", cy: "13.5", r: ".8", fill: "none" })
  );
});

export default NibButton;
