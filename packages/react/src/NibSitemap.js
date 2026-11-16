import { createElement as h, forwardRef } from 'react';

export const NibSitemap = forwardRef(function NibSitemap({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "9", y: "3", width: "6", height: "5", rx: "1", fill: "none" }),
    h('rect', { x: "3", y: "16", width: "6", height: "5", rx: "1", fill: "none" }),
    h('rect', { x: "15", y: "16", width: "6", height: "5", rx: "1", fill: "none" }),
    h('path', { d: "M12 8v4M6 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2", fill: "none" })
  );
});

export default NibSitemap;
