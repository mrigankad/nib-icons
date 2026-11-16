import { createElement as h, forwardRef } from 'react';

export const NibWink = forwardRef(function NibWink({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('path', { d: "M9 9.5h.01M13.5 9.5h3M8 14a4.5 4.5 0 0 0 8 0", fill: "none" })
  );
});

export default NibWink;
