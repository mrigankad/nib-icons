import { createElement as h, forwardRef } from 'react';

export const NibBeanie = forwardRef(function NibBeanie({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 15a7 7 0 0 1 14 0M4 15h16v4H4zM8 15v4M12 15v4M16 15v4", fill: "none" }),
    h('circle', { cx: "12", cy: "5", r: "2", fill: "none" })
  );
});

export default NibBeanie;
