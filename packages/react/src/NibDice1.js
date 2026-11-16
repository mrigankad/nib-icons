import { createElement as h, forwardRef } from 'react';

export const NibDice1 = forwardRef(function NibDice1({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "3", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "1.3", fill: "currentColor" })
  );
});

export default NibDice1;
