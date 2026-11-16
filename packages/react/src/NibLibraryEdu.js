import { createElement as h, forwardRef } from 'react';

export const NibLibraryEdu = forwardRef(function NibLibraryEdu({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 9l10-6 10 6zM4 9v10M20 9v10M2 21h20M8 12v7M12 12v7M16 12v7", fill: "none" })
  );
});

export default NibLibraryEdu;
