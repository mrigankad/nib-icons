import { createElement as h, forwardRef } from 'react';

export const NibTire = forwardRef(function NibTire({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9.500", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "5.500", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "1.200", fill: "none" }),
    h('path', { d: "M12 6.500v4.300M12 13.200v4.300M6.500 12h4.300M13.200 12h4.300", fill: "none" }),
    h('path', { d: "M12 2.500v3M12 18.500v3M2.500 12h3M18.500 12h3", fill: "none" })
  );
});

export default NibTire;
