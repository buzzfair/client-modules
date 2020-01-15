import * as React from 'react';
const SvgLink = ({ title, size, color, width, height, ...props }) =>
  React.createElement(
    'svg',
    Object.assign(
      {
        viewBox: '0 0 16 16',
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
        'M9 10.9c-.1-.1-.3-.1-.4 0l-2.3 2.3-3.4-3.6 2.3-2.3c.1-.1.1-.3 0-.4L4 5.9c-.1-.1-.3-.1-.4 0L.1 9.4c-.1.1-.1.3 0 .4l6.1 6.1c.1.1.3.1.4 0l3.6-3.6c.1-.1.1-.2 0-.3L9 10.9zM6.7 5.4c.1.1.3.1.4 0l2.5-2.5 3.5 3.5-2.5 2.5c-.1.1-.1.3 0 .4l1.1 1.1c.1.1.3.1.4 0L16 6.5c.1-.1.1-.3 0-.4L9.8.1c-.1-.1-.3-.1-.4 0L5.6 3.9c-.1.1-.1.3 0 .4l1.1 1.1z',
    }),
    React.createElement('path', {
      fill: color || 'currentColor',
      d:
        'M10.2 7.3c.1-.1.1-.2 0-.4L9.1 5.8c-.1-.1-.3-.1-.4 0L5.8 8.7c-.1.1-.1.3 0 .4l1.1 1.1c.1.1.3.1.4 0l2.9-2.9z',
    })
  );
export default SvgLink;
//# sourceMappingURL=LinkIcon.js.map