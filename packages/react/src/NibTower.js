import { createElement as h, forwardRef } from 'react';

export const NibTower = forwardRef(function NibTower({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 21l1-15h4l1 15M8 6h8M12 2v4M10 2h4M9.5 12h5M9 17h6M6 21h12", fill: "none" })
  );
});

export default NibTower;
