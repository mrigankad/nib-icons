import { createElement as h, forwardRef } from 'react';

export const NibSkull = forwardRef(function NibSkull({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 11a7 7 0 0 1 14 0v3l-2 1.5V19H7v-3.5L5 14zM10 19v2M14 19v2M12 14.5l-.7 1.3h1.4z", fill: "none" }),
    h('circle', { cx: "9.5", cy: "11.5", r: "1.5", fill: "none" }),
    h('circle', { cx: "14.5", cy: "11.5", r: "1.5", fill: "none" })
  );
});

export default NibSkull;
