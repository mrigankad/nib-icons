import { createElement as h, forwardRef } from 'react';

export const NibResearch = forwardRef(function NibResearch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4M14 3l5 5M14 3v5h5M7 9h4M7 13h3", fill: "none" }),
    h('circle', { cx: "16", cy: "16", r: "3.5", fill: "none" }),
    h('path', { d: "M18.5 18.5L22 22", fill: "none" })
  );
});

export default NibResearch;
