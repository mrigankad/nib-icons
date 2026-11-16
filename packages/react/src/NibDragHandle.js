import { createElement as h, forwardRef } from 'react';

export const NibDragHandle = forwardRef(function NibDragHandle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "4", width: "16", height: "16", rx: "2", fill: "none" }),
    h('path', { d: "M8.5 9h7M8.5 12h7M8.5 15h7", fill: "none" })
  );
});

export default NibDragHandle;
