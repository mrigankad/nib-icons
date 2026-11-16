import { createElement as h, forwardRef } from 'react';

export const NibGrill = forwardRef(function NibGrill({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 9h18a9 7 0 0 1-18 0zM7 15l-3 7M17 15l3 7M12 16v4M8 5c0-1 1-1 1-2M12 5c0-1 1-1 1-2M16 5c0-1 1-1 1-2", fill: "none" }),
    h('circle', { cx: "12", cy: "21", r: "1", fill: "none" })
  );
});

export default NibGrill;
