import * as React from 'react';
const SvgTrash = ({ title, size, color, width, height, ...props }) =>
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
        'M24 12v18H8V12h16zm2-2H6v20c0 1.2.8 2 2 2h16c1.2 0 2-.8 2-2V10zM4.2 6h24v2h-24V6zm2-2h20v2h-20V4zm8-2h4v2h-4V2z',
    }),
    React.createElement('path', {
      fill: color || 'currentColor',
      d: 'M10 14h2v14h-2V14zm5 0h2v14h-2V14zm5 0h2v14h-2V14z',
    })
  );
export default SvgTrash;
//# sourceMappingURL=TrashIcon.js.map
