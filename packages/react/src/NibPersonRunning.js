import { createElement as h, forwardRef } from 'react';

export const NibPersonRunning = forwardRef(function NibPersonRunning({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "15.5", cy: "4.5", r: "2.2", fill: "none" }),
    h('path', { d: "M14 8.5l-3 5 4 2-.5 5M11 13.5L8 17l-3.5-.5M13.5 9.5l4 2 2-2.5M12.5 10L8.5 10l-2 2.5", fill: "none" })
  );
});

export default NibPersonRunning;
