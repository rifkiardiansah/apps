// Copyright 2017-2018 @polkadot/app-accounts authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

// Enzyme
const Adapter = require('enzyme-adapter-react-16');
const Enzyme = require('enzyme');

Enzyme.configure({
  adapter: new Adapter()
});

// global.shallow = Enzyme.shallow;
// global.mount = Enzyme.mount;
// global.render = Enzyme.render;

// // Enzyme Helpers
// global.itRenders = Component => {
//   const wrapper = Enzyme.shallow(Component);
//   expect(Enzyme.shallow(Component).length).to.eql(1);
//   return wrapper;
// };

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
}

global.localStorage = localStorageMock

module.exports = Enzyme;
