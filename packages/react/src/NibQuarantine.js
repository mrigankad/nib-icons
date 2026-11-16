import { createElement as h, forwardRef } from 'react';

export const NibQuarantine = forwardRef(function NibQuarantine({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none", strokeDasharray: "2.5 3" }),
    h('circle', { cx: "12", cy: "12", r: "3", fill: "none" }),
    h('path', { d: "M12 6.5v2.5M12 15v2.5M6.5 12H9M15 12h2.5", fill: "none" })
  );
});

export default NibQuarantine;
