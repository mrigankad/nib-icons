import { createElement as h, forwardRef } from 'react';

export const NibBot = forwardRef(function NibBot({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "6", width: "18", height: "13", rx: "6.5", fill: "none" }),
    h('path', { d: "M12 6V3M9 12v1M15 12v1", fill: "none" })
  );
});

export default NibBot;
