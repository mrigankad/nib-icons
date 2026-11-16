import { createElement as h, forwardRef } from 'react';

export const NibWatch = forwardRef(function NibWatch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "6", fill: "none" }),
    h('path', { d: "M9 6.8L9.5 3h5l.5 3.8M9 17.2l.5 3.8h5l.5-3.8M12 9.5V12l1.5 1.5", fill: "none" })
  );
});

export default NibWatch;
