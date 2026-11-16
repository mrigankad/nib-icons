import { createElement as h, forwardRef } from 'react';

export const NibTire = forwardRef(function NibTire({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "8.5", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "4.5", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "1", fill: "none" }),
    h('path', { d: "M20.5 12H22M2 12H3.5M12 3.5V2M12 22v-1.5M18.01 5.99l1.06-1.06M4.93 19.07l1.06-1.06M18.01 18.01l1.06 1.06M4.93 4.93l1.06 1.06", fill: "none" })
  );
});

export default NibTire;
