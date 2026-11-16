import { createElement as h, forwardRef } from 'react';

export const NibFeedSocial = forwardRef(function NibFeedSocial({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "2", width: "16", height: "9", rx: "1.5", fill: "none" }),
    h('rect', { x: "4", y: "13", width: "16", height: "9", rx: "1.5", fill: "none" }),
    h('circle', { cx: "7.5", cy: "5.5", r: "1", fill: "none" }),
    h('path', { d: "M10 5.5h6M7 8h10M7.5 16.5h.01M10 16.5h6M7 19h10", fill: "none" })
  );
});

export default NibFeedSocial;
