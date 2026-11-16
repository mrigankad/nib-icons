import { createElement as h, forwardRef } from 'react';

export const NibTokenKey = forwardRef(function NibTokenKey({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "8", cy: "12", r: "6", fill: "none" }),
    h('circle', { cx: "8", cy: "12", r: "2", fill: "none" }),
    h('path', { d: "M14 12h8M19 12v3M21.5 12v2", fill: "none" })
  );
});

export default NibTokenKey;
