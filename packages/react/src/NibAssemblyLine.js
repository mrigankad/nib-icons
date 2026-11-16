import { createElement as h, forwardRef } from 'react';

export const NibAssemblyLine = forwardRef(function NibAssemblyLine({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "15", width: "20", height: "4", rx: "2", fill: "none" }),
    h('rect', { x: "4", y: "10", width: "4", height: "5", fill: "none" }),
    h('rect', { x: "10", y: "10", width: "4", height: "5", fill: "none" }),
    h('rect', { x: "16", y: "10", width: "4", height: "5", fill: "none" }),
    h('path', { d: "M12 3v4M10 7h4", fill: "none" })
  );
});

export default NibAssemblyLine;
