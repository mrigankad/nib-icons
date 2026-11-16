import { createElement as h, forwardRef } from 'react';

export const NibSuccess = forwardRef(function NibSuccess({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('path', { d: "M7 12.5l3.2 3.2L17 9", fill: "none" })
  );
});

export default NibSuccess;
