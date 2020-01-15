import * as React from 'react';
const SvgType = ({ title, size, color, width, height, ...props }) =>
  React.createElement(
    'svg',
    Object.assign(
      {
        fill: color || 'currentColor',
        viewBox: '0 0 24 24',
        width: size || width || '1em',
        height: size || height || '1em',
        role: 'img',
      },
      props
    ),
    React.createElement('title', null, title),
    React.createElement('path', {
      d:
        'M5.026 7.026a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4zm-14 1a3 3 0 110-6 3 3 0 010 6zm14 0a3 3 0 110-6 3 3 0 010 6zm-14.03-5v-1h14v1h-14zm3.03 19v-1h8v1h-8zm0-1h8v1h-8v-1zm1.886-.005h4.202V2.966H9.912v18.055zm5.114-18.995v20h-6v-20h6z',
    })
  );
export default SvgType;
//# sourceMappingURL=TypeIcon.js.map
