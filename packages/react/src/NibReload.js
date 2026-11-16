import { createElement as h, forwardRef } from 'react';

export const NibReload = forwardRef(function NibReload({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 12a9 9 0 1 1-2.6-6.4L21 8M21 3v5h-5", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "1", fill: "currentColor" })
  );
});

export default NibReload;
