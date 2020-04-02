import React from 'react';
import cx from 'classnames';
import omitProps from '../utils/omitProps';
import style from './styles/index.module.scss';

const propKeys = [
  'as',
  'reverse',
  'start',
  'center',
  'end',
  'top',
  'middle',
  'bottom',
  'around',
  'between',
  'first',
  'last',
  'className',
  'children',
];

function getClassNames(props: RowProps) {
  const modificators = [style.row];

  for (const key of modificatorKeys) {
    const value = props[key as keyof typeof props];
    if (value) {
      modificators.push(style[`${key}-${value}`]);
    }
  }

  if (props.reverse) {
    modificators.push(style.reverse);
  }

  return cx(props.className, modificators);
}

const modificatorKeys = [
  'start',
  'center',
  'end',
  'top',
  'middle',
  'bottom',
  'around',
  'between',
  'first',
  'last',
];

type ModificatorType = 'xs' | 'sm' | 'md' | 'lg';

export type RowProps = {
  as?: string;
  around?: ModificatorType;
  between?: ModificatorType;
  bottom?: ModificatorType;
  center?: ModificatorType;
  className?: string;
  end?: ModificatorType;
  first?: ModificatorType;
  last?: ModificatorType;
  middle?: ModificatorType;
  reverse?: boolean;
  start?: ModificatorType;
  top?: ModificatorType;
};

export const Row: React.FC<RowProps> = props => {
  return React.createElement(
    props.as || 'div',
    omitProps(propKeys, { ...props, className: getClassNames(props) })
  );
};

export default Row;
