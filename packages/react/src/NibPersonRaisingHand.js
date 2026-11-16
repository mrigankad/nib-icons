import { createElement as h, forwardRef } from 'react';

export const NibPersonRaisingHand = forwardRef(function NibPersonRaisingHand({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "11", cy: "6", r: "2.2", fill: "none" }),
    h('rect', { x: "8", y: "10", width: "6", height: "6", rx: "2", fill: "none" }),
    h('path', { d: "M9.5 16v5M12.5 16v5M8 12l-2.5 4M14 11.5l2.5-3V3", fill: "none" })
  );
});

export default NibPersonRaisingHand;
