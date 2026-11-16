import { createElement as h, forwardRef } from 'react';

export const NibBriefing = forwardRef(function NibBriefing({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "4", width: "14", height: "17", rx: "2", fill: "none" }),
    h('path', { d: "M9 2h6v4H9zM8.5 11h7M8.5 14.5h7M8.5 18h4", fill: "none" })
  );
});

export default NibBriefing;
