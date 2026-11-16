import { createElement as h, forwardRef } from 'react';

export const NibHologram = forwardRef(function NibHologram({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l5 3v6l-5 3-5-3V5zM7 5l5 3 5-3M12 8v6M4 20l4-5M20 20l-4-5", fill: "none" }),
    h('ellipse', { cx: "12", cy: "20", rx: "8", ry: "2", fill: "none" })
  );
});

export default NibHologram;
