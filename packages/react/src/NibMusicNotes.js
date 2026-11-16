import { createElement as h, forwardRef } from 'react';

export const NibMusicNotes = forwardRef(function NibMusicNotes({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 19V7l12-3v12M8 11l12-3", fill: "none" }),
    h('circle', { cx: "5.5", cy: "19", r: "2.5", fill: "none" }),
    h('circle', { cx: "17.5", cy: "16", r: "2.5", fill: "none" })
  );
});

export default NibMusicNotes;
