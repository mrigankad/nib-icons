import { createElement as h, forwardRef } from 'react';

export const NibThreadReply = forwardRef(function NibThreadReply({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "5.5", cy: "5", r: "2.5", fill: "none" }),
    h('path', { d: "M5.5 7.5V12a3 3 0 0 0 3 3H20M16 11l4 4-4 4", fill: "none" })
  );
});

export default NibThreadReply;
