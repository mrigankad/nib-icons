import { createElement as h, forwardRef } from 'react';

export const NibCompassDraw = forwardRef(function NibCompassDraw({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "4.5", r: "1.5", fill: "none" }),
    h('path', { d: "M11 6L5 21M13 6l6 15M7.5 15h9", fill: "none" })
  );
});

export default NibCompassDraw;
