import { createElement as h, forwardRef } from 'react';

export const NibVoiceAi = forwardRef(function NibVoiceAi({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 10v4M7 7v10M11 4v16M15 8v8M19 2l.6 1.4L21 4l-1.4.6L19 6l-.6-1.4L17 4l1.4-.6zM19 10v4", fill: "none" })
  );
});

export default NibVoiceAi;
