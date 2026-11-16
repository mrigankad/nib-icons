import { createElement as h, forwardRef } from 'react';

export const NibUsersPlus = forwardRef(function NibUsersPlus({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "9", cy: "8", r: "4", fill: "none" }),
    h('path', { d: "M2 20a7 7 0 0 1 11.5-5.4M15.5 4.2a4 4 0 0 1 1 7.4M19 14v6M16 17h6", fill: "none" })
  );
});

export default NibUsersPlus;
