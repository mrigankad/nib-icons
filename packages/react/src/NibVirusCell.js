import { createElement as h, forwardRef } from 'react';

export const NibVirusCell = forwardRef(function NibVirusCell({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "6", fill: "none" }),
    h('path', { d: "M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.8 2.8M16.2 16.2L19 19M5 19l2.8-2.8M16.2 7.8L19 5M10 10h.01M14 13h.01", fill: "none" })
  );
});

export default NibVirusCell;
