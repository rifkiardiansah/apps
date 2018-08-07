// Copyright 2017-2018 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BareProps, UnlockI18n } from './types';

import React from 'react';

import classes from '@polkadot/ui-app/util/classes';

import Button from './Button';
import Input from './Input';
import Notification from './Notification';

type Props = BareProps & {
  autoFocus?: boolean,
  defaultValue?: any,
  children?: React.ReactNode,
  isDisabled?: boolean,
  isError?: boolean,
  error?: UnlockI18n | null,
  label?: string,
  name?: string,
  onChange: (value: string) => void,
  value: any,
  withLabel?: boolean
};

type State = {
  isVisible: boolean
};

export default class Password extends React.PureComponent<Props, State> {
  state: State = {
    isVisible: false
  };

  render () {
    const { children, autoFocus, className, defaultValue, isDisabled, isError, label, name, onChange, style, value, withLabel, error } = this.props;
    const { isVisible } = this.state;

    return (
      <Input
        autoFocus={autoFocus}
        className={classes('ui--Password', className)}
        defaultValue={defaultValue}
        isAction
        isDisabled={isDisabled}
        isError={isError}
        label={label}
        name={name}
        onChange={onChange}
        style={style}
        type={
          isVisible
            ? 'text'
            : 'password'
        }
        value={value}
        withLabel={withLabel}
      >
        <Button
          icon={
            isVisible
              ? 'hide'
              : 'unhide'
          }
          isPrimary
          onClick={this.onToggleVisible}
        />
        {children}
      </Input>
      // <Notification error={error} />
    );
  }

  onToggleVisible = (): void => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }
}
