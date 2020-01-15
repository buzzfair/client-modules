import * as React from 'react';
const SvgImage = ({ title, size, color, width, height, ...props }) =>
  React.createElement(
    'svg',
    Object.assign(
      {
        viewBox: '0 0 32 32',
        width: size || width || '1em',
        height: size || height || '1em',
        fill: color || 'currentColor',
        role: 'img',
      },
      props
    ),
    React.createElement('title', null, title),
    React.createElement('path', {
      fill: color || 'currentColor',
      d:
        'M26 0H6C3.8 0 2 1.8 2 4v24c0 2.2 1.8 4 4 4h20c.4 0 .8 0 1.2-.2h.2c.4-.2.6-.4 1-.6 1-.8 1.6-1.8 1.6-3.2V4c0-2.2-1.8-4-4-4zM11.6 30l6.8-8-6.4-8-8 10V4c0-1.2.8-2 2-2h20c1.2 0 2 .8 2 2v23l-6-7-8.4 10h-2z',
    }),
    React.createElement('path', {
      fill: color || 'currentColor',
      d: 'M24 10a4 4 0 11-8 0 4 4 0 018 0z',
    })
  );
export default SvgImage;
//# sourceMappingURL=ImageIcon.js.map