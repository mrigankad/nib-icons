import { createElement as h, forwardRef } from 'react';

export const NibBrainCircuit = forwardRef(function NibBrainCircuit({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 5a3 3 0 0 0-5.5-1.5A3 3 0 0 0 4 8a3 3 0 0 0 0 5 3.5 3.5 0 0 0 3 5.5A3 3 0 0 0 12 20zM12 5v15M12 9h4l2-2M12 13h5M12 17h3l2 2", fill: "none" }),
    h('circle', { cx: "19", cy: "6", r: "1", fill: "none" }),
    h('circle', { cx: "18", cy: "13", r: "1", fill: "none" }),
    h('circle', { cx: "18", cy: "20", r: "1", fill: "none" })
  );
});

export default NibBrainCircuit;
