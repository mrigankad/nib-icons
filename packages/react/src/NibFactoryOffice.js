import { createElement as h, forwardRef } from 'react';

export const NibFactoryOffice = forwardRef(function NibFactoryOffice({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 21V11l5 3v-3l5 3v-3l5 3V3h4v18zM6 17.5h2M11 17.5h2", fill: "none" })
  );
});

export default NibFactoryOffice;
