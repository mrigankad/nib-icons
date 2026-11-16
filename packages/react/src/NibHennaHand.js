import { createElement as h, forwardRef } from 'react';

export const NibHennaHand = forwardRef(function NibHennaHand({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 13V5a1.5 1.5 0 0 1 3 0v6V4a1.5 1.5 0 0 1 3 0v7V5.5a1.5 1.5 0 0 1 3 0V15a7 7 0 0 1-7 7 6 6 0 0 1-5-3l-2-4a1.5 1.5 0 0 1 2.5-1.5z", fill: "none" }),
    h('circle', { cx: "12", cy: "16", r: "1.5", fill: "none" }),
    h('path', { d: "M12 13v.01M9.5 16h.01M14.5 16h.01", fill: "none" })
  );
});

export default NibHennaHand;
