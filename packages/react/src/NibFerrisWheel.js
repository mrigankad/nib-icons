import { createElement as h, forwardRef } from 'react';

export const NibFerrisWheel = forwardRef(function NibFerrisWheel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "10", r: "7", fill: "none" }),
    h('path', { d: "M12 3v14M5 10h14M7 5l10 10M17 5L7 15M8 22l4-12 4 12M6 22h12", fill: "none" })
  );
});

export default NibFerrisWheel;
