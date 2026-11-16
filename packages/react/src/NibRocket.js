import { createElement as h, forwardRef } from 'react';

export const NibRocket = forwardRef(function NibRocket({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2c3 2 5 6 5 10v4H7v-4c0-4 2-8 5-10zM7 13l-3 3v3l3-1M17 13l3 3v3l-3-1M10 20l2 2 2-2", fill: "none" }),
    h('circle', { cx: "12", cy: "9", r: "1.8", fill: "none" })
  );
});

export default NibRocket;
