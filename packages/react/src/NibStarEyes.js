import { createElement as h, forwardRef } from 'react';

export const NibStarEyes = forwardRef(function NibStarEyes({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('path', { d: "M9 7.5l.6 1.3 1.4.2-1 1 .2 1.4L9 10.7l-1.2.7.2-1.4-1-1 1.4-.2zM15 7.5l.6 1.3 1.4.2-1 1 .2 1.4-1.2-.7-1.2.7.2-1.4-1-1 1.4-.2zM8 14.5a4.5 4.5 0 0 0 8 0", fill: "none" })
  );
});

export default NibStarEyes;
