import { createElement as h, forwardRef } from 'react';

export const NibPassword = forwardRef(function NibPassword({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "7", width: "20", height: "10", rx: "2", fill: "none" }),
    h('circle', { cx: "7", cy: "12", r: "1", fill: "currentColor" }),
    h('circle', { cx: "11", cy: "12", r: "1", fill: "currentColor" }),
    h('circle', { cx: "15", cy: "12", r: "1", fill: "currentColor" }),
    h('path', { d: "M18 14.5h1.5", fill: "none" })
  );
});

export default NibPassword;
