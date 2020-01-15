import * as React from 'react';
const SvgReddit = ({ title, size, color, width, height, ...props }) =>
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
        'M11.4 8.6c0 .1.1.2.1.3 0 .2-.1.4-.2.6s-.3.3-.5.4h-.3c-.2 0-.5-.1-.6-.2-.2-.1-.4-.3-.4-.6v-.2c0-.2.1-.4.2-.6.1-.1.2-.3.4-.3.1 0 .2-.1.3-.1.2 0 .4.1.6.2s.4.3.4.5zm-.6 2.6c-.1-.1-.2-.1-.3-.1s-.2 0-.2.1c-.7.4-1.5.7-2.4.7-.6 0-1.2-.1-1.8-.4-.1 0-.2-.1-.3-.2-.1 0-.1-.1-.2-.1h-.4c-.1 0-.2.1-.2.2v.2c0 .1 0 .2.1.3 0 .1.1.1.2.2.7.5 1.7.7 2.6.7.8 0 1.7-.2 2.5-.6.1-.1.2-.1.4-.2.1 0 .1-.1.2-.1.1-.1.1-.1.1-.2v-.3c-.1-.1-.2-.2-.3-.2zM5.2 9.9c.1 0 .2.1.3.1.3 0 .5-.1.7-.3s.3-.5.3-.7c0-.3-.1-.5-.3-.7-.2-.3-.4-.4-.7-.4h-.2c-.3.1-.6.4-.7.7v.3c0 .2.1.4.2.6 0 .2.2.3.4.4zM16 7.4v.1c0 .4-.1.8-.3 1.1s-.5.5-.8.7v.5c0 .8-.3 1.7-.8 2.3-.9 1.2-2.4 2-3.8 2.3-.8.2-1.6.3-2.4.3-1.2 0-2.4-.2-3.5-.7-1.1-.5-2.2-1.2-2.9-2.3-.4-.6-.6-1.3-.6-2v-.5c-.1-.1-.4-.3-.5-.6-.3-.3-.4-.7-.4-1.1 0-.5.2-1 .6-1.4s.8-.6 1.4-.6h.2c.3 0 .5 0 .8.1.2.1.4.2.6.4.1 0 .1-.1.2-.1 1.2-.7 2.5-.9 3.8-1 0-.6.1-1.3.4-1.9.3-.5.7-.9 1.3-1 .2 0 .4-.1.6-.1.6 0 1.1.1 1.6.3.2-.3.5-.6.9-.8.2-.1.5-.1.7-.1s.5 0 .7.2c.3.1.6.4.8.7s.3.7.3 1v.2c0 .5-.3.9-.6 1.2s-.8.5-1.2.5h-.2c-.5 0-.9-.3-1.2-.6s-.5-.8-.5-1.2v-.1c-.4-.2-.9-.4-1.3-.4h-.2c-.3.1-.7.3-.8.6-.2.4-.3 1-.3 1.5 1.3.1 2.6.4 3.7 1 0 0 .1 0 .1.1.1-.1.2-.1.3-.2.3-.2.8-.3 1.2-.3.2 0 .4 0 .5.1.4.1.8.3 1.1.7.3.2.5.6.5 1.1zm-3.8-4.2c0 .3.1.5.3.6.1.1.4.2.6.2.2 0 .4-.1.6-.2.2-.2.3-.4.3-.6v-.1c0-.2-.1-.5-.3-.6-.2-.2-.4-.3-.6-.3h-.2c-.2 0-.4.2-.5.3-.1.3-.2.5-.2.7zM2.7 6.6c-.2-.1-.4-.1-.5-.1h-.1c-.3 0-.5.1-.7.3-.2.1-.4.4-.4.6v.1c0 .2 0 .3.1.5.1.1.1.2.2.3.4-.7.9-1.2 1.4-1.7zm11.2 3.2c0-.6-.2-1.2-.5-1.6-.7-.9-1.7-1.5-2.8-1.9-.2-.1-.4-.1-.6-.2-.7-.2-1.3-.2-2-.2-.9 0-1.7.1-2.6.4-1.1.3-2.1.9-2.8 1.8-.3.5-.5 1-.5 1.6 0 .2 0 .4.1.6.1.5.4.9.7 1.2.3.4.7.7 1.1.9.1.1.2.1.3.2 1.2.6 2.5.9 3.8.9h.7c1.3-.1 2.7-.5 3.7-1.3.3-.3.7-.6.9-.9.3-.4.4-.7.5-1.2v-.3zM15 7.5c0-.1 0-.3-.1-.4-.1-.2-.2-.3-.4-.4s-.4-.2-.6-.2c-.2 0-.4 0-.5.1.5.5 1 1 1.3 1.7.1-.1.2-.2.2-.3 0-.2.1-.4.1-.5z',
    })
  );
export default SvgReddit;
//# sourceMappingURL=RedditIcon.js.map
