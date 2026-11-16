import { createElement as h, forwardRef } from 'react';

export const NibKhanda = forwardRef(function NibKhanda({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2L13.5 5.5V14H10.5V5.5Z", fill: "none" }),
    h('path', { d: "M12 14V17.5", fill: "none" }),
    h('circle', { cx: "12", cy: "9.5", r: "4.5", fill: "none" }),
    h('path', { d: "M4.5 3C4 12 8 18 15 21.5", fill: "none" }),
    h('path', { d: "M19.5 3C20 12 16 18 9 21.5", fill: "none" })
  );
});

export default NibKhanda;
