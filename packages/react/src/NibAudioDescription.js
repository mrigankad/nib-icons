import { createElement as h, forwardRef } from 'react';

export const NibAudioDescription = forwardRef(function NibAudioDescription({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 17l4-10 4 10M3.5 13.5h5M12 7v10h2a5 5 0 0 0 0-10zM20 9a4 4 0 0 1 0 6M22 7a7 7 0 0 1 0 10", fill: "none" })
  );
});

export default NibAudioDescription;
