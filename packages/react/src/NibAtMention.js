import { createElement as h, forwardRef } from 'react';

export const NibAtMention = forwardRef(function NibAtMention({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 4h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4V6a2 2 0 0 1 2-2zM14 9v2a1.3 1.3 0 0 0 2.6 0v-.5a4.1 4.1 0 1 0-1.7 3.3", fill: "none" }),
    h('circle', { cx: "12.5", cy: "10.5", r: "1.6", fill: "none" })
  );
});

export default NibAtMention;
