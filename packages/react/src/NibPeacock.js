import { createElement as h, forwardRef } from 'react';

export const NibPeacock = forwardRef(function NibPeacock({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 21v-9M12 12a1.5 1.5 0 1 0 0-3M12 21c-5 0-9-4-9-9M12 21c5 0 9-4 9-9", fill: "none" }),
    h('circle', { cx: "5", cy: "9", r: "1.5", fill: "none" }),
    h('circle', { cx: "8", cy: "5", r: "1.5", fill: "none" }),
    h('circle', { cx: "16", cy: "5", r: "1.5", fill: "none" }),
    h('circle', { cx: "19", cy: "9", r: "1.5", fill: "none" })
  );
});

export default NibPeacock;
