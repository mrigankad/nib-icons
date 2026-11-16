import { createElement as h, forwardRef } from 'react';

export const NibChatbot = forwardRef(function NibChatbot({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM12 5V2", fill: "none" }),
    h('circle', { cx: "9", cy: "11", r: "1", fill: "none" }),
    h('circle', { cx: "15", cy: "11", r: "1", fill: "none" })
  );
});

export default NibChatbot;
