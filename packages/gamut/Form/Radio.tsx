import React, { ReactNode, ChangeEventHandler } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles/Radio.scss';

export type RadioProps = {
  checked?: boolean;
  className?: string;
  htmlFor?: string;
  label?: ReactNode;
  name?: string;
  onChange?: (event) => void;
  required?: boolean;
  value?: string;
};

const Radio = ({
  name,
  value,
  label,
  checked,
  className,
  htmlFor,
  onChange,
  required,
  ...rest
}: RadioProps) => {
  const classNames = cx(s.Radio, className);
  return (
    <div className={classNames}>
      <input
        className={s.radioInput}
        id={htmlFor}
        name={name}
        required={required}
        type="radio"
        checked={checked}
        onChange={onChange}
        value={value}
        {...rest}
      />
      <label htmlFor={htmlFor} className={s.radioLabel}>
        {label}
      </label>
    </div>
  );
};

Radio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.node,
  checked: PropTypes.bool,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default Radio;