import { createElement as h, forwardRef } from 'react';

export const NibCaseTitle = forwardRef(function NibCaseTitle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 18l4-12 4 12M3.3 14h5.4M20.5 12v6", fill: "none" }),
    h('circle', { cx: "17.5", cy: "15", r: "3", fill: "none" })
  );
});

export default NibCaseTitle;
