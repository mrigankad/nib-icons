import { createElement as h, forwardRef } from 'react';

export const NibPaw = forwardRef(function NibPaw({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "6", cy: "10", rx: "1.8", ry: "2.3", fill: "none" }),
    h('ellipse', { cx: "10", cy: "5.5", rx: "1.8", ry: "2.3", fill: "none" }),
    h('ellipse', { cx: "14", cy: "5.5", rx: "1.8", ry: "2.3", fill: "none" }),
    h('ellipse', { cx: "18", cy: "10", rx: "1.8", ry: "2.3", fill: "none" }),
    h('path', { d: "M12 11c-3 0-6 4-6 7a2 2 0 0 0 3 2c2-1 4-1 6 0a2 2 0 0 0 3-2c0-3-3-7-6-7z", fill: "none" })
  );
});

export default NibPaw;
