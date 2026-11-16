import { createElement as h, forwardRef } from 'react';

export const NibLayoutKanban = forwardRef(function NibLayoutKanban({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "5", height: "14", rx: "1.5", fill: "none" }),
    h('rect', { x: "9.5", y: "3", width: "5", height: "9", rx: "1.5", fill: "none" }),
    h('rect', { x: "16", y: "3", width: "5", height: "18", rx: "1.5", fill: "none" })
  );
});

export default NibLayoutKanban;
