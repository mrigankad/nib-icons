import { createElement as h, forwardRef } from 'react';

export const NibLlm = forwardRef(function NibLlm({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "3", fill: "none" }),
    h('path', { d: "M7 8h6M7 12h10M7 16h4M16 15l.6 1.4L18 17l-1.4.6L16 19l-.6-1.4L14 17l1.4-.6z", fill: "none" })
  );
});

export default NibLlm;
