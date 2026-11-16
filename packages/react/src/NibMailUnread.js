import { createElement as h, forwardRef } from 'react';

export const NibMailUnread = forwardRef(function NibMailUnread({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 11v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9M3 7l9 6 3.5-2.3", fill: "none" }),
    h('circle', { cx: "19", cy: "5.5", r: "2.5", fill: "none" })
  );
});

export default NibMailUnread;
