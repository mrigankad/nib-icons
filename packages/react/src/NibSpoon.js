import { createElement as h, forwardRef } from 'react';

export const NibSpoon = forwardRef(function NibSpoon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "7.5", rx: "4", ry: "5", fill: "none" }),
    h('path', { d: "M12 12.5V22", fill: "none" })
  );
});

export default NibSpoon;
