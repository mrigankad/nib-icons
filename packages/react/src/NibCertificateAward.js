import { createElement as h, forwardRef } from 'react';

export const NibCertificateAward = forwardRef(function NibCertificateAward({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 18H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6M7 8h10M7 11h5", fill: "none" }),
    h('circle', { cx: "17", cy: "15", r: "3", fill: "none" }),
    h('path', { d: "M15.5 17.5L15 22l2-1 2 1-.5-4.5", fill: "none" })
  );
});

export default NibCertificateAward;
