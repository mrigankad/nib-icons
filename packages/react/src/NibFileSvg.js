import { createElement as h, forwardRef } from 'react';

export const NibFileSvg = forwardRef(function NibFileSvg({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M8 17.5c1.5-4.5 6.5-4.5 8 0", fill: "none" }),
    h('circle', { cx: "12", cy: "12.5", r: ".8", fill: "none" })
  );
});

export default NibFileSvg;
