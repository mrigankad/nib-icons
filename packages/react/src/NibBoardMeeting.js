import { createElement as h, forwardRef } from 'react';

export const NibBoardMeeting = forwardRef(function NibBoardMeeting({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "6", y: "9", width: "12", height: "6", rx: "3", fill: "none" }),
    h('circle', { cx: "9", cy: "5", r: "1.5", fill: "none" }),
    h('circle', { cx: "15", cy: "5", r: "1.5", fill: "none" }),
    h('circle', { cx: "9", cy: "19", r: "1.5", fill: "none" }),
    h('circle', { cx: "15", cy: "19", r: "1.5", fill: "none" }),
    h('circle', { cx: "3", cy: "12", r: "1.5", fill: "none" }),
    h('circle', { cx: "21", cy: "12", r: "1.5", fill: "none" })
  );
});

export default NibBoardMeeting;
