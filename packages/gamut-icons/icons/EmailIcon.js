import * as React from 'react';
const SvgEmail = ({ title, size, color, width, height, ...props }) =>
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
        'M.2 3.8c-.1-.1-.2-.1-.2.1v8.9c0 .1.1.2.2.1l4.8-5c.1-.1.1-.2 0-.3L.2 3.8zm15.6-1.7c.1-.1.1-.2-.1-.2H.3c-.1 0-.2.1 0 .2l7.5 6c.1.1.3.1.4 0l7.6-6zm-5.4 6.3c-.1-.1-.3-.1-.4 0L8.2 9.8c-.1.1-.3.1-.4 0L5.9 8.3c-.1-.1-.3-.1-.4 0L.1 13.9c-.1.1-.1.2.1.2h15.5c.1 0 .2-.1.1-.2l-5.4-5.5zm.6-.8c-.1.1-.1.2 0 .3l4.8 4.9c.1.1.2.1.2-.1V3.9c0-.1-.1-.2-.2-.1l-.3.2c-.1.1-.3.2-.4.3L11 7.6z',
    })
  );
export default SvgEmail;
//# sourceMappingURL=EmailIcon.js.map