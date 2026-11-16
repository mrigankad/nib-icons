import { createElement as h, forwardRef } from 'react';

export const NibCoconut = forwardRef(function NibCoconut({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "13", r: "8", fill: "none" }),
    h('path', { d: "M12 5c-1-1-1-3 0-4 1 1 1 3 0 4zM9.5 10h.01M14.5 10h.01M12 12.5h.01", fill: "none" })
  );
});

export default NibCoconut;
