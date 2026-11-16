import { createElement as h, forwardRef } from 'react';

export const NibLinkBio = forwardRef(function NibLinkBio({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "2", width: "14", height: "20", rx: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "6.5", r: "1.5", fill: "none" }),
    h('rect', { x: "8", y: "10", width: "8", height: "2.5", rx: "1.25", fill: "none" }),
    h('rect', { x: "8", y: "14", width: "8", height: "2.5", rx: "1.25", fill: "none" })
  );
});

export default NibLinkBio;
