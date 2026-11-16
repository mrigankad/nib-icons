import { createElement as h, forwardRef } from 'react';

export const NibThumbsUpStatus = forwardRef(function NibThumbsUpStatus({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "4", fill: "none" }),
    h('path', { d: "M8.5 11v6M8.5 11l2.5-4a1.3 1.3 0 0 1 2.3 1.2L12.5 11h3a1.2 1.2 0 0 1 1.2 1.4l-.7 3.6a1.3 1.3 0 0 1-1.3 1H8.5", fill: "none" })
  );
});

export default NibThumbsUpStatus;
