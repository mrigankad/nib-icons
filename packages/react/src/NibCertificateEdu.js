import { createElement as h, forwardRef } from 'react';

export const NibCertificateEdu = forwardRef(function NibCertificateEdu({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "4", width: "20", height: "13", rx: "1", fill: "none" }),
    h('path', { d: "M6 8h8M6 11h5", fill: "none" }),
    h('circle', { cx: "17", cy: "13", r: "2.5", fill: "none" }),
    h('path', { d: "M15.5 15l-1 5 2.5-1.5 2.5 1.5-1-5", fill: "none" })
  );
});

export default NibCertificateEdu;
