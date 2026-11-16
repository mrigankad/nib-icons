import { createElement as h, forwardRef } from 'react';

export const NibTomato = forwardRef(function NibTomato({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "13.5", r: "8", fill: "none" }),
    h('path', { d: "M12 5.5L9 4l1 3-4 0 3 2M12 5.5L15 4l-1 3 4 0-3 2M12 5.5V3", fill: "none" })
  );
});

export default NibTomato;
