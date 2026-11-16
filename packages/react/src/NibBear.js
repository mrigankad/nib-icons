import { createElement as h, forwardRef } from 'react';

export const NibBear = forwardRef(function NibBear({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "6", r: "2.5", fill: "none" }),
    h('circle', { cx: "18", cy: "6", r: "2.5", fill: "none" }),
    h('circle', { cx: "12", cy: "13", r: "8", fill: "none" }),
    h('ellipse', { cx: "12", cy: "16", rx: "3", ry: "2.2", fill: "none" }),
    h('path', { d: "M9 11h.01M15 11h.01M12 15v1", fill: "none" })
  );
});

export default NibBear;
