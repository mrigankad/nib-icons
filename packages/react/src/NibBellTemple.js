import { createElement as h, forwardRef } from 'react';

export const NibBellTemple = forwardRef(function NibBellTemple({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v2M10 4h4M7 17c0-7 1-12 5-12s5 5 5 12zM4 17h16M12 17v3", fill: "none" }),
    h('circle', { cx: "12", cy: "21", r: "1", fill: "none" })
  );
});

export default NibBellTemple;
