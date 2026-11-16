import { createElement as h, forwardRef } from 'react';

export const NibToggleOn = forwardRef(function NibToggleOn({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "6", width: "20", height: "12", rx: "6", fill: "none" }),
    h('circle', { cx: "16", cy: "12", r: "3", fill: "currentColor" })
  );
});

export default NibToggleOn;
