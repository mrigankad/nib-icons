import { createElement as h, forwardRef } from 'react';

export const NibNeuralNetwork = forwardRef(function NibNeuralNetwork({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "4", cy: "7", r: "1.5", fill: "none" }),
    h('circle', { cx: "4", cy: "17", r: "1.5", fill: "none" }),
    h('circle', { cx: "12", cy: "5", r: "1.5", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "1.5", fill: "none" }),
    h('circle', { cx: "12", cy: "19", r: "1.5", fill: "none" }),
    h('circle', { cx: "20", cy: "12", r: "1.5", fill: "none" }),
    h('path', { d: "M5.5 7l5-2M5.5 7l5 5M5.5 7l5 12M5.5 17l5-12M5.5 17l5-5M5.5 17l5 2M13.5 5l5 7M13.5 12h5M13.5 19l5-7", fill: "none" })
  );
});

export default NibNeuralNetwork;
