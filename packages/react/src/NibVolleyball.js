import { createElement as h, forwardRef } from 'react';

export const NibVolleyball = forwardRef(function NibVolleyball({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('path', { d: "M12 3a9 9 0 0 0 0 9h9M12 12l-5 7.5M12 12c-4 0-7 2-8.5 4M12 3c4 2 6 5 6 9", fill: "none" })
  );
});

export default NibVolleyball;
