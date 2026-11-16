import { createElement as h, forwardRef } from 'react';

export const NibAddressBook = forwardRef(function NibAddressBook({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "3", width: "15", height: "18", rx: "2", fill: "none" }),
    h('circle', { cx: "12.5", cy: "10", r: "2.5", fill: "none" }),
    h('path', { d: "M8.5 16.5a4 4 0 0 1 8 0M3 7h4M3 12h4M3 17h4", fill: "none" })
  );
});

export default NibAddressBook;
