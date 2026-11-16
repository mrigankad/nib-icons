import { createElement as h, forwardRef } from 'react';

export const NibParcel = forwardRef(function NibParcel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "4", width: "18", height: "16", rx: "1.5", fill: "none" }),
    h('path', { d: "M9 4v6l1.5-1 1.5 1 1.5-1 1.5 1V4M7 16h4", fill: "none" })
  );
});

export default NibParcel;
