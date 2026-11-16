import { createElement as h, forwardRef } from 'react';

export const NibVideoCall = forwardRef(function NibVideoCall({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "6", width: "13", height: "12", rx: "2", fill: "none" }),
    h('path', { d: "M15 10l6-3.5v11L15 14", fill: "none" })
  );
});

export default NibVideoCall;
