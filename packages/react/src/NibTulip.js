import { createElement as h, forwardRef } from 'react';

export const NibTulip = forwardRef(function NibTulip({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 4l2.5 2L12 3l2.5 3L17 4v4a5 5 0 0 1-10 0zM12 13v9M12 19c-2-3-5-3-6-2 1 2 3 3 6 2z", fill: "none" })
  );
});

export default NibTulip;
