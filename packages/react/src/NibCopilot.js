import { createElement as h, forwardRef } from 'react';

export const NibCopilot = forwardRef(function NibCopilot({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "8", cy: "7", r: "3", fill: "none" }),
    h('path', { d: "M2 20a6 6 0 0 1 12 0", fill: "none" }),
    h('rect', { x: "14", y: "9", width: "8", height: "7", rx: "2", fill: "none" }),
    h('path', { d: "M16.5 12.5h.01M19.5 12.5h.01M18 9V7", fill: "none" })
  );
});

export default NibCopilot;
