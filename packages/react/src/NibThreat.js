import { createElement as h, forwardRef } from 'react';

export const NibThreat = forwardRef(function NibThreat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "8", fill: "none" }),
    h('path', { d: "M12 2v3M12 19v3M2 12h3M19 12h3M12 9v3.5M12 15.5h.01", fill: "none" })
  );
});

export default NibThreat;
