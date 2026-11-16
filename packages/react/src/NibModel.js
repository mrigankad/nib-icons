import { createElement as h, forwardRef } from 'react';

export const NibModel = forwardRef(function NibModel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l9 5v10l-9 5-9-5V7zM3 7l9 5 9-5M12 12v10M12 7l.6 1.4L14 9l-1.4.6L12 11l-.6-1.4L10 9l1.4-.6z", fill: "none" })
  );
});

export default NibModel;
