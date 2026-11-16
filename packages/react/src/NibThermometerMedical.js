import { createElement as h, forwardRef } from 'react';

export const NibThermometerMedical = forwardRef(function NibThermometerMedical({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M18 2l4 4L8 20H4v-4zM14 6l1.5 1.5M11 9l1.5 1.5M8 12l1.5 1.5M4 20l-2 2", fill: "none" })
  );
});

export default NibThermometerMedical;
