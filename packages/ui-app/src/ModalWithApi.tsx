// Copyright 2017-2018 @polkadot/ui-signer authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ApiProps } from '@polkadot/ui-react-rx/types';
import { I18nProps } from '@polkadot/ui-app/types';

import React from 'react';
import Modal from '@polkadot/ui-app/Modal';
import withApi from '@polkadot/ui-react-rx/with/api';

import translate from './translate';

type Props = I18nProps & ApiProps;

class ModalWithApi extends React.PureComponent<Props> {
  render () {
    const { children, ...props } = this.props;
    return (
      <Modal {...props}>
        {children}
      </Modal>
    );
  }
}

const Component: React.ComponentType<any> = translate(
  withApi(ModalWithApi)
);

export default Component;
