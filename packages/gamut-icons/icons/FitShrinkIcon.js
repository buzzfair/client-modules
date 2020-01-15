import * as React from 'react';
const SvgFitShrink = ({ title, size, color, width, height, ...props }) =>
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
        'M28 0H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm0 30H4c-1.2 0-2-.8-2-2V17h7.6l-4 4c-.4.4-.4 1 0 1.4s1 .4 1.4 0l6.4-6.4L7 9.6c-.2-.2-.4-.2-.6-.2s-.6 0-.8.2c-.4.4-.4 1 0 1.4l4 4H2V4c0-1.2.8-2 2-2h24c1.2 0 2 .8 2 2v11h-7.6l4-4c.4-.4.4-1 0-1.4s-1-.4-1.4 0L18.6 16l6.4 6.4c.2.2.4.2.8.2s.6 0 .8-.2c.4-.4.4-1 0-1.4l-4-4H30v11c0 1.2-.8 2-2 2z',
    })
  );
export default SvgFitShrink;
//# sourceMappingURL=FitShrinkIcon.js.map