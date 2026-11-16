import { createElement as h, forwardRef } from 'react';

export const NibCaseLower = forwardRef(function NibCaseLower({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6.5", cy: "15", r: "3", fill: "none" }),
    h('circle', { cx: "17", cy: "15", r: "3", fill: "none" }),
    h('path', { d: "M9.5 12v6M14 6v12", fill: "none" })
  );
});

export default NibCaseLower;
