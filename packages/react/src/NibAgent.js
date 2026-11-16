import { createElement as h, forwardRef } from 'react';

export const NibAgent = forwardRef(function NibAgent({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "6", y: "4", width: "12", height: "10", rx: "3", fill: "none" }),
    h('path', { d: "M9.5 9h.01M14.5 9h.01M4 21a8 5 0 0 1 16 0M12 14v3M19 2l.6 1.4L21 4l-1.4.6L19 6l-.6-1.4L17 4l1.4-.6z", fill: "none" })
  );
});

export default NibAgent;
