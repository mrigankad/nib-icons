import { createElement as h, forwardRef } from 'react';

export const NibCountdown = forwardRef(function NibCountdown({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "13", r: "8", fill: "none" }),
    h('path', { d: "M12 13V5a8 8 0 0 1 8 8z", fill: "currentColor" }),
    h('path', { d: "M10 2h4", fill: "none" })
  );
});

export default NibCountdown;
