// Copyright 2017-2018 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BareProps, SUIEvent } from './types';

import React from 'react';
import SUIInput from 'semantic-ui-react/dist/commonjs/elements/Input/Input';

import isUndefined from '@polkadot/util/is/undefined';

import Labelled from './Labelled';
import Notification from './Notification';

type Input$Type = 'number' | 'password' | 'text';

type Props = BareProps & {
  children?: React.ReactNode,
  defaultValue?: any,
  error?: React.ReactNode,
  icon?: any, // node?
  info?: React.ReactNode,
  isAction?: boolean,
  isDisabled?: boolean,
  isEditable?: boolean,
  isError?: boolean,
  isHidden?: boolean,
  label?: any, // node?
  max?: any,
  min?: any,
  maxLength?: number,
  name?: string,
  onChange: (value: string) => void,
  onKeyDown?: (event: SUIEvent) => void,
  onKeyUp?: (event: SUIEvent) => void,
  placeholder?: string,
  type?: Input$Type,
  value?: any,
  withLabel?: boolean
};

type State = {
  name: string;
};

let counter = 0;

export default class Input extends React.PureComponent<Props, State> {
  state: State = {
    name: `in_${counter++}_at_${Date.now()}`
  };

  render () {
    const { children, className, defaultValue, error, icon, info, isEditable = false, isAction = false, isDisabled = false, isError = false, isHidden = false, label, max, min, maxLength, name, placeholder, style, type = 'text', value, withLabel } = this.props;

    return (
      <Labelled
        className={className}
        label={label}
        style={style}
        withLabel={withLabel}
      >
        <SUIInput
          action={isAction}
          className={isEditable ? 'edit icon' : ''}
          defaultValue={defaultValue}
          disabled={isDisabled}
          id={name}
          iconPosition={
            isUndefined(icon)
              ? void 0
              : 'left'
          }
          error={isError}
          hidden={isHidden}
          max={max}
          min={min}
          maxLength={maxLength}
          name={name || this.state.name}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          onKeyUp={this.onKeyUp}
          placeholder={placeholder}
          type={type}
          value={value}
        >
          <input
            autoComplete={
              type === 'password'
                ? 'new-password'
                : 'off'
            }
          />
          {isEditable ? <i className='edit icon' /> : null}
          {icon}
          {children}
        </SUIInput>
        <Notification
          error={error}
          info={info}
        />
      </Labelled>
    );
  }

  onChange = (event: React.SyntheticEvent<Element>, { value }: SUIEvent): void => {
    this.props.onChange(value);
  }

  onKeyDown = (event: SUIEvent): void => {
    const { onKeyDown } = this.props;

    if (onKeyDown) {
      onKeyDown(event);
    }
  }

  onKeyUp = (event: SUIEvent): void => {
    const { onKeyUp } = this.props;

    if (onKeyUp) {
      onKeyUp(event);
    }
  }
}
