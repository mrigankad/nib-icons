import { createElement as h, forwardRef } from 'react';

export const NibBracelet = forwardRef(function NibBracelet({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "12", rx: "9", ry: "5", fill: "none" }),
    h('circle', { cx: "12", cy: "17", r: "1.5", fill: "none" }),
    h('circle', { cx: "6", cy: "15.5", r: "1", fill: "none" }),
    h('circle', { cx: "18", cy: "15.5", r: "1", fill: "none" })
  );
});

export default NibBracelet;
