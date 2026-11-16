import { createElement as h, forwardRef } from 'react';

export const NibBlur = forwardRef(function NibBlur({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "3", fill: "none" }),
    h('path', { d: "M12 4h.01M12 20h.01M4 12h.01M20 12h.01M6.5 6.5h.01M17.5 6.5h.01M6.5 17.5h.01M17.5 17.5h.01", fill: "none" })
  );
});

export default NibBlur;
