import * as React from 'react';
const SvgCheckHeavyCircled = ({
  title,
  size,
  color,
  width,
  height,
  ...props
}) =>
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
        'M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm-1.6 0c0-3.6-2.9-6.4-6.4-6.4-3.6 0-6.4 2.8-6.4 6.4s2.9 6.4 6.4 6.4c3.6 0 6.4-2.8 6.4-6.4zm-3.2-3.4L6.7 9.1l-2-2-1.4 1.5L6.7 12l6-6-1.5-1.4z',
    })
  );
export default SvgCheckHeavyCircled;
//# sourceMappingURL=CheckHeavyCircledIcon.js.map