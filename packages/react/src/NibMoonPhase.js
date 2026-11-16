import { createElement as h, forwardRef } from 'react';

export const NibMoonPhase = forwardRef(function NibMoonPhase({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('path', { d: "M12 3a9 9 0 0 1 0 18c-3-2-4.5-5.5-4.5-9S9 5 12 3z", fill: "currentColor" })
  );
});

export default NibMoonPhase;
