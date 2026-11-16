import { createElement as h, forwardRef } from 'react';

export const NibProfileSocial = forwardRef(function NibProfileSocial({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none" }),
    h('circle', { cx: "9", cy: "10", r: "2.5", fill: "none" }),
    h('path', { d: "M5 17a4 4 0 0 1 8 0M15 9h3M15 12h3M15 15h2", fill: "none" })
  );
});

export default NibProfileSocial;
