// Copyright 2017-2018 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { InputOnChangeEvent, InputOnChangeEventData } from '../../types';
import { Props } from '../types';

import BN from 'bn.js';
import React from 'react';

import Input from '../../Input';
import Bare from './Bare';

export default class Amount extends React.PureComponent<Props> {
  render () {
    const { className, defaultValue: { value }, isDisabled, isError, label, style, withLabel } = this.props;
    const defaultValue = new BN((value as number) || 0).toNumber();

    return (
      <Bare
        className={className}
        style={style}
      >
        <Input
          className={isDisabled ? 'full' : 'small'}
          defaultValue={defaultValue}
          isDisabled={isDisabled}
          isError={isError}
          label={label}
          min={0}
          onChange={this.onChange}
          type='number'
          withLabel={withLabel}
        />
      </Bare>
    );
  }

  onChange = (event: InputOnChangeEvent, eventData: InputOnChangeEventData): void => {
    const { onChange } = this.props;

    const value = eventData && (eventData.value as string);

    onChange && onChange({
      isValid: true,
      value: new BN(value || 0)
    });
  }
}
