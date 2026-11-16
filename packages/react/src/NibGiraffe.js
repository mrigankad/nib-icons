import { createElement as h, forwardRef } from 'react';

export const NibGiraffe = forwardRef(function NibGiraffe({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 3V1.5M17 3V1.5M13 3h5l1 3-3 1-1 13H9V16l3-9zM10 21v1.5M15 21v1.5M16 4.5h.01M12 12h.01M11 16h.01M13.5 17h.01", fill: "none" })
  );
});

export default NibGiraffe;
