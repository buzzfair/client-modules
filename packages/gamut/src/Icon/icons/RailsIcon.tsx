import React, { SVGProps } from 'react';

import { defaultIconProps } from '../defaultIconProps';

export const RailsIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props}>
      <title>Rails Icon</title>
      <path d="M9.196 11.888c-1.19 2.646-1.718 5.531-1.579 8.67h5.487c-.911-2.22-1.183-4.879-.834-7.955.266-2.346 1.3-4.336 3.065-5.966-2.972.959-4.998 2.713-6.139 5.25zm-2.781 9.974c-.363-3.821.173-7.326 1.607-10.514C10.1 6.724 14.727 4.43 21.899 4.47c-5.135 1.726-7.917 4.486-8.347 8.282-.43 3.796.143 6.832 1.72 9.11H6.415z" />
      <path d="M2 19.174h2.581v2.609H2zM3.108 12.16l2.022.736-.744 2.042-2.021-.735zM6.09 7.223l1.49.86-.87 1.506-1.489-.86zM10.865 4.397l.645 1.117-1.129.652-.645-1.117zM15.5 2.874l.343.94-.94.341-.342-.94zM20 3v1h-1V3z" />
    </svg>
  );
};

RailsIcon.defaultProps = defaultIconProps;

export default RailsIcon;
