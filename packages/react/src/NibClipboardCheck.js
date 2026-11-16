import { createElement as h, forwardRef } from 'react';

export const NibClipboardCheck = forwardRef(function NibClipboardCheck({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M9 13.5l2 2 4-4", fill: "none" }),
    h('rect', { x: "9", y: "2.5", width: "6", height: "3.5", rx: "1", fill: "none" })
  );
});

export default NibClipboardCheck;
