// Copyright 2017-2018 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { InputOnChangeEvent, InputOnChangeEventData } from '../../types';
import { Props } from '../types';

import React from 'react';

import Input from '../../Input';
import Bare from './Bare';

export default class StringParam extends React.PureComponent<Props> {
  render () {
    const { className, defaultValue: { value }, isDisabled, isError, label, style, withLabel } = this.props;
    const defaultValue = value as string;

    return (
      <Bare
        className={className}
        style={style}
      >
        <Input
          className='full'
          defaultValue={defaultValue}
          isDisabled={isDisabled}
          isError={isError}
          label={label}
          onChange={this.onChange}
          placeholder='<any string>'
          type='text'
          withLabel={withLabel}
        />
      </Bare>
    );
  }

  onChange = (event: InputOnChangeEvent, eventData: InputOnChangeEventData): void => {
    const { onChange } = this.props;
    const value = eventData && (eventData.value as string);
    const isValid = !!value && value.length !== 0;

    onChange && onChange({
      isValid,
      value
    });
  }
}
