import { createElement as h, forwardRef } from 'react';

export const NibReferee = forwardRef(function NibReferee({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "6", r: "3", fill: "none" }),
    h('path', { d: "M5 21v-4a7 7 0 0 1 14 0v4M9 12l1 9M15 12l-1 9M12 11v10", fill: "none" })
  );
});

export default NibReferee;
