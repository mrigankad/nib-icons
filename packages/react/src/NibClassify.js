import { createElement as h, forwardRef } from 'react';

export const NibClassify = forwardRef(function NibClassify({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "4", r: "2", fill: "none" }),
    h('path', { d: "M12 6v4M5 14v-4h14v4M12 10v4", fill: "none" }),
    h('rect', { x: "2", y: "14", width: "6", height: "6", rx: "1", fill: "none" }),
    h('rect', { x: "9", y: "14", width: "6", height: "6", rx: "1", fill: "none" }),
    h('rect', { x: "16", y: "14", width: "6", height: "6", rx: "1", fill: "none" })
  );
});

export default NibClassify;
