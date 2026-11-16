import { createElement as h, forwardRef } from 'react';

export const NibMagicStaff = forwardRef(function NibMagicStaff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 10L3 21", fill: "none" }),
    h('circle', { cx: "16.5", cy: "7.5", r: "3.5", fill: "none" }),
    h('path', { d: "M21 2l.5 1.5L23 4l-1.5.5L21 6l-.5-1.5L19 4l1.5-.5z", fill: "none" })
  );
});

export default NibMagicStaff;
