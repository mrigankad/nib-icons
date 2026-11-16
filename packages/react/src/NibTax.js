import { createElement as h, forwardRef } from 'react';

export const NibTax = forwardRef(function NibTax({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 17l6-6", fill: "none" }),
    h('circle', { cx: "9.5", cy: "11.5", r: ".8", fill: "none" }),
    h('circle', { cx: "14.5", cy: "16.5", r: ".8", fill: "none" })
  );
});

export default NibTax;
