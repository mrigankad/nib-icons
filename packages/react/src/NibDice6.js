import { createElement as h, forwardRef } from 'react';

export const NibDice6 = forwardRef(function NibDice6({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "3", fill: "none" }),
    h('circle', { cx: "8.5", cy: "7.5", r: "1", fill: "currentColor" }),
    h('circle', { cx: "8.5", cy: "12", r: "1", fill: "currentColor" }),
    h('circle', { cx: "8.5", cy: "16.5", r: "1", fill: "currentColor" }),
    h('circle', { cx: "15.5", cy: "7.5", r: "1", fill: "currentColor" }),
    h('circle', { cx: "15.5", cy: "12", r: "1", fill: "currentColor" }),
    h('circle', { cx: "15.5", cy: "16.5", r: "1", fill: "currentColor" })
  );
});

export default NibDice6;
