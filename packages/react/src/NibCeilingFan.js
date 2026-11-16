import { createElement as h, forwardRef } from 'react';

export const NibCeilingFan = forwardRef(function NibCeilingFan({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v5", fill: "none" }),
    h('circle', { cx: "12", cy: "10", r: "2.5", fill: "none" }),
    h('path', { d: "M9.6 9.2C6 7.5 3 8 2 9.5c2.5 1 5 1.5 7.6 1.5M14.4 9.2C18 7.5 21 8 22 9.5c-2.5 1-5 1.5-7.6 1.5M12 12.5c0 3-1 6-2.5 8 2.5.5 4.5-.5 5-2.5.3-1.8-1-3.5-2.5-5.5", fill: "none" })
  );
});

export default NibCeilingFan;
