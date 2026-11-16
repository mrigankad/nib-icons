import { createElement as h, forwardRef } from 'react';

export const NibKhanda = forwardRef(function NibKhanda({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l1 3v9l-1 2-1-2V5z", fill: "none" }),
    h('circle', { cx: "12", cy: "11", r: "4.5", fill: "none" }),
    h('path', { d: "M7 4c-4 4-4 12 2 16M17 4c4 4 4 12-2 16M9 20l-2 2M15 20l2 2", fill: "none" })
  );
});

export default NibKhanda;
