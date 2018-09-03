// Copyright 2017-2018 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

// TODO: We have a lot shared between this and InputExtrinsic & InputStorage

import { SectionItem } from '@polkadot/params/types';
import { Interfaces, Interface$Sections } from '@polkadot/jsonrpc/types';
import { DropdownOptions } from '../util/types';
import { I18nProps, InputOnChangeEventData } from '../types';

import '../InputExtrinsic/InputExtrinsic.css';

import React from 'react';

import map from '@polkadot/jsonrpc';

import classes from '../util/classes';
import translate from '../translate';
import SelectMethod from './SelectMethod';
import SelectSection from './SelectSection';
import methodOptions from './options/method';
import sectionOptions from './options/section';

type Props = I18nProps & {
  defaultValue: SectionItem<Interfaces>,
  isError?: boolean,
  labelMethod?: string,
  labelSection?: string,
  onChange: (event: React.SyntheticEvent<HTMLInputElement>, eventData: InputOnChangeEventData) => void,
  withLabel?: boolean
};

type State = {
  optionsMethod: DropdownOptions,
  optionsSection: DropdownOptions,
  value: SectionItem<Interfaces>
};

class InputRpc extends React.PureComponent<Props, State> {
  state: State;

  constructor (props: Props) {
    super(props);

    const { section } = this.props.defaultValue;

    this.state = {
      optionsMethod: methodOptions(section),
      optionsSection: sectionOptions(),
      value: this.props.defaultValue
    };
  }

  render () {
    const { className, labelMethod, labelSection, style, withLabel } = this.props;
    const { optionsMethod, optionsSection, value } = this.state;

    return (
      <div
        className={classes('ui--DropdownLinked', 'ui--row', className)}
        style={style}
      >
        <SelectSection
          className='small'
          label={labelSection}
          onChange={this.onSectionChange}
          options={optionsSection}
          value={value}
          withLabel={withLabel}
        />
        <SelectMethod
          className='large'
          label={labelMethod}
          onChange={this.onMethodChange}
          options={optionsMethod}
          value={value}
          withLabel={withLabel}
        />
      </div>
    );
  }

  onMethodChange = (event: React.SyntheticEvent<HTMLInputElement>, eventData: InputOnChangeEventData): void => {
    const { onChange } = this.props;
    const { value: { name, section } } = this.state;

    const newValue = eventData && (eventData.value as SectionItem<Interfaces>);

    if (newValue.section === section && newValue.name === name) {
      return;
    }

    this.setState({ value: newValue }, () =>
      onChange(event, {
        value: newValue
      })
    );
  }

  onSectionChange = (event: React.SyntheticEvent<HTMLInputElement>, eventData: InputOnChangeEventData): void => {
    const { value: { section } } = this.state;

    const newSection = eventData && (eventData.value as Interface$Sections);

    if (newSection === section) {
      return;
    }

    const optionsMethod = methodOptions(newSection);
    const value = map[newSection].public[optionsMethod[0].value];

    this.setState({ optionsMethod }, () =>
      this.onMethodChange(event, {
        value
      })
    );
  }
}

export default translate(InputRpc);
