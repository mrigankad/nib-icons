import { createElement as h, forwardRef } from 'react';

export const NibUser = forwardRef(function NibUser({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "8", r: "4", fill: "none" }),
    h('path', { d: "M4 20a8 8 0 0 1 16 0", fill: "none" })
  );
});

export default NibUser;
