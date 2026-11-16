import { createElement as h, forwardRef } from 'react';

export const NibDice = forwardRef(function NibDice({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "3", fill: "none" }),
    h('circle', { cx: "8", cy: "8", r: "1", fill: "currentColor" }),
    h('circle', { cx: "12", cy: "12", r: "1", fill: "currentColor" }),
    h('circle', { cx: "16", cy: "16", r: "1", fill: "currentColor" })
  );
});

export default NibDice;
