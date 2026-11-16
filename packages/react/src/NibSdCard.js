import { createElement as h, forwardRef } from 'react';

export const NibSdCard = forwardRef(function NibSdCard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6zM10 6v3M13 6v3M16 6v3", fill: "none" })
  );
});

export default NibSdCard;
