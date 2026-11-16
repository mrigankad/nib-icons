import { createElement as h, forwardRef } from 'react';

export const NibPhotoAlbum = forwardRef(function NibPhotoAlbum({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "2", width: "16", height: "20", rx: "2", fill: "none" }),
    h('path', { d: "M8 2v20M10.5 16l3-3 4 4", fill: "none" }),
    h('circle', { cx: "14.5", cy: "8.5", r: "1.5", fill: "none" })
  );
});

export default NibPhotoAlbum;
