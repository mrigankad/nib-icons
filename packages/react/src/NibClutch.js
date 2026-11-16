import { createElement as h, forwardRef } from 'react';

export const NibClutch = forwardRef(function NibClutch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "7", width: "20", height: "11", rx: "2", fill: "none" }),
    h('path', { d: "M2 9l10 5 10-5", fill: "none" }),
    h('circle', { cx: "12", cy: "14", r: "1", fill: "none" })
  );
});

export default NibClutch;
