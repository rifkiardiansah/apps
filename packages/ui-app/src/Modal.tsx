// Copyright 2017-2018 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Modal, { ModalProps } from 'semantic-ui-react/dist/commonjs/modules/Modal/Modal';
import ModalActions from 'semantic-ui-react/dist/commonjs/modules/Modal/ModalActions';
import ModalContent from 'semantic-ui-react/dist/commonjs/modules/Modal/ModalContent';
import ModalDescription from 'semantic-ui-react/dist/commonjs/modules/Modal/ModalDescription';
import ModalHeader from 'semantic-ui-react/dist/commonjs/modules/Modal/ModalHeader';

import { ApiProps } from '@polkadot/ui-react-rx/types';
import { I18nProps } from '@polkadot/ui-app/types';

import React from 'react';
// import Modal from '@polkadot/ui-app/Modal';
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

interface ModalComponent extends React.ComponentClass<ModalProps> {
  Actions: typeof ModalActions;
  Content: typeof ModalContent;
  Description: typeof ModalDescription;
  Header: typeof ModalHeader;
}

const Component: React.ComponentType<ModalComponent> = translate(
  withApi(ModalWithApi)
);

export default Component;
