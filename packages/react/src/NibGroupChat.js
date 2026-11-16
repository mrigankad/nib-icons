import { createElement as h, forwardRef } from 'react';

export const NibGroupChat = forwardRef(function NibGroupChat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z", fill: "none" }),
    h('circle', { cx: "9", cy: "9", r: "1.5", fill: "none" }),
    h('circle', { cx: "15", cy: "9", r: "1.5", fill: "none" }),
    h('path', { d: "M6.5 13.5a2.5 2 0 0 1 5 0M12.5 13.5a2.5 2 0 0 1 5 0", fill: "none" })
  );
});

export default NibGroupChat;
