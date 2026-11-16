import { createElement as h, forwardRef } from 'react';

export const NibSchema = forwardRef(function NibSchema({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "3", width: "8", height: "6", rx: "1", fill: "none" }),
    h('rect', { x: "14", y: "3", width: "8", height: "6", rx: "1", fill: "none" }),
    h('rect', { x: "8", y: "15", width: "8", height: "6", rx: "1", fill: "none" }),
    h('path', { d: "M6 9v3h12V9M12 12v3", fill: "none" })
  );
});

export default NibSchema;
