import * as React from 'react';
const SvgFileEdit = ({ title, size, color, width, height, ...props }) =>
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
        'M22 0H12C9.8 0 8 1.8 8 4v11.6l2-2V4c0-1.2.8-2 2-2h8v10h10v16c0 1.2-.8 2-2 2H12c-1.2 0-2-.8-2-2v-.4l-1.8 1.8c.6 1.6 2 2.6 3.8 2.6h16c2.2 0 4-1.8 4-4V10L22 0z',
    }),
    React.createElement('path', {
      fill: color || 'currentColor',
      d:
        'M14.566 20.258L6.364 28.46l-4.243-4.243 8.202-8.202 4.243 4.243zM17.4 17.4c.8-.8.8-2 0-2.8L16 13.2c-.8-.8-2-.8-2.8 0l-1.4 1.4 4.2 4.2 1.4-1.4zM0 30.6l5-.8-4.2-4.2z',
    })
  );
export default SvgFileEdit;
//# sourceMappingURL=FileEditIcon.js.map
