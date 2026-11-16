import { createElement as h, forwardRef } from 'react';

export const NibKoala = forwardRef(function NibKoala({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "5", cy: "9", r: "3.5", fill: "none" }),
    h('circle', { cx: "19", cy: "9", r: "3.5", fill: "none" }),
    h('path', { d: "M8 8a5 5 0 0 1 8 0c1 2 2 4 2 6 0 4-3 7-6 7s-6-3-6-7c0-2 1-4 2-6z", fill: "none" }),
    h('ellipse', { cx: "12", cy: "15", rx: "1.8", ry: "2.5", fill: "none" }),
    h('path', { d: "M9.5 11.5h.01M14.5 11.5h.01", fill: "none" })
  );
});

export default NibKoala;
