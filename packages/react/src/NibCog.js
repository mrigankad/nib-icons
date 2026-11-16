import { createElement as h, forwardRef } from 'react';

export const NibCog = forwardRef(function NibCog({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "6", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "2", fill: "none" }),
    h('path', { d: "M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8", fill: "none" })
  );
});

export default NibCog;
