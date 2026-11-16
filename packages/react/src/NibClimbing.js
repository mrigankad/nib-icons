import { createElement as h, forwardRef } from 'react';

export const NibClimbing = forwardRef(function NibClimbing({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M20 2v20", fill: "none" }),
    h('circle', { cx: "12", cy: "7", r: "2", fill: "none" }),
    h('path', { d: "M13 10l-1 5M13 10l4-3 3-1M12 15l4 2v4M12 15l-4 2-2 4M12 11L8 9 6 5", fill: "none" })
  );
});

export default NibClimbing;
