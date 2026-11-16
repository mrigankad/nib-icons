import { createElement as h, forwardRef } from 'react';

export const NibFileDoc = forwardRef(function NibFileDoc({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M8 12l1.3 5 1.4-4 1.3 4 1.4-4 1.3 4L16 12", fill: "none" })
  );
});

export default NibFileDoc;
