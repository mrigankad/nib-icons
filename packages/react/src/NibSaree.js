import { createElement as h, forwardRef } from 'react';

export const NibSaree = forwardRef(function NibSaree({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 3H16C16 8 17.5 13 19 21H5C6.5 13 8 8 8 3Z", fill: "none" }),
    h('path', { d: "M8 3Q14 8 17.5 16", fill: "none" }),
    h('path', { d: "M5.6 18H18.4", fill: "none" }),
    h('path', { d: "M9 14L8.5 18M12 12V18M14.5 14.5L14.8 18", fill: "none" })
  );
});

export default NibSaree;
