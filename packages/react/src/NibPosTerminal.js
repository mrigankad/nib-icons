import { createElement as h, forwardRef } from 'react';

export const NibPosTerminal = forwardRef(function NibPosTerminal({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "7", width: "16", height: "15", rx: "2", fill: "none" }),
    h('rect', { x: "7", y: "11.5", width: "10", height: "3", rx: ".5", fill: "none" }),
    h('path', { d: "M7 9V2.5h10V9M8 18.5h.01M12 18.5h.01M16 18.5h.01", fill: "none" })
  );
});

export default NibPosTerminal;
