import { createElement as h, forwardRef } from 'react';

export const NibMagicWand = forwardRef(function NibMagicWand({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 20l10-10M12.5 8.5l1.5-1.5 3 3-1.5 1.5zM15 2v2.5M20 7h2M19.5 3.5l-1.5 1.5M10 5h2M19 12v2", fill: "none" })
  );
});

export default NibMagicWand;
