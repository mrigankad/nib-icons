import { createElement as h, forwardRef } from 'react';

export const NibFileHeart = forwardRef(function NibFileHeart({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 18s-3.5-2-3.5-4.3a1.8 1.8 0 0 1 3.5-.7 1.8 1.8 0 0 1 3.5.7C15.5 16 12 18 12 18z", fill: "none" })
  );
});

export default NibFileHeart;
