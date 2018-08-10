// Copyright 2017-2018 @polkadot/app-accounts authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import React from 'react';
import createReactClass from 'create-react-class';
import expect from 'expect';
import sinon from 'sinon';
import { shallow } from '../test/enzyme';
// Note: react-test-renderer (i.e. react-test-renderer/shallow) replaces deprecated react-addons-test-utils
// Note: https://reactjs.org/docs/shallow-renderer.html
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6
const proxyquire = require('proxyquire').noCallThru();

// import DownloadButton from './DownloadButton';

const createStubComponent = () => {
  return createReactClass({
      render: () => {
          return React.DOM.div();
      }
  });
}

const translateStub = createStubComponent();

const sandbox = sinon.sandbox.create();

const DownloadButton = proxyquire('./DownloadButton', {
    'react': React,
    './translate': translateStub
});

describe ('DownloadButton', () => {
  let wrapper;
  
  beforeEach(() => {
    downloadButtonClass = React.DOM.findDOMNode(DownloadButton).getAttribute('class');

    wrapper = shallow(<DownloadButton className='test' />, {});
  });

  it('creates the element', () => {
    expect(wrapper).toBeDefined();
  });

  // it('sets password modal open when click download button', () => {
  //   // Mock State
  //   const state = {
  //     isPasswordModalOpen: false
  //   };

  //   const wrapper = mount(<DownloadButton {...state}/>);
  //   const downloadDiv = wrapper.find('accounts--Address-download');
  //   const downloadButton = downloadDiv.find('button').last();
  //   downloadButton.simulate('click');
  //   expect(wrapper.state().isPasswordModalOpen).toBe(true);
  // });
});