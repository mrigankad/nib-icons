import { createElement as h, forwardRef } from 'react';

export const NibInvite = forwardRef(function NibInvite({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "16", height: "12", rx: "2", fill: "none" }),
    h('path', { d: "M2 7l8 5 8-5M21 14v6M18 17h6", fill: "none" })
  );
});

export default NibInvite;
