import { createElement as h, forwardRef } from 'react';

export const NibCertificate = forwardRef(function NibCertificate({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M13 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6M6 7.5h8M6 11h5M15.5 14.2L14.5 21l2.5-1.5 2.5 1.5-1-6.8", fill: "none" }),
    h('circle', { cx: "17", cy: "12", r: "2.5", fill: "none" })
  );
});

export default NibCertificate;
