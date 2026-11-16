import { createElement as h, forwardRef } from 'react';

export const NibArrowUpCircle = forwardRef(function NibArrowUpCircle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('path', { d: "M12 16.5v-9M8.5 11L12 7.5l3.5 3.5", fill: "none" })
  );
});

export default NibArrowUpCircle;
