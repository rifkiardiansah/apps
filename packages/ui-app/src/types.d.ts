// Copyright 2017-2018 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { TranslationFunction } from 'i18next';
import { Extrinsics, Extrinsic$Sections } from '@polkadot/extrinsics/types';
import { Interfaces, Interface$Sections } from '@polkadot/jsonrpc/types';
import { RxApiInterface } from '@polkadot/api-rx/types';
import { SectionItem } from '@polkadot/params/types';
import { Storages, Storage$Sections } from '@polkadot/storage/types';

import { RawParam, RawParams } from './Params/types';

import BN from 'bn.js';

export type BareProps = {
  className?: string,
  style?: {
    [index: string]: any
  }
};

export type I18nProps = BareProps & {
  t: TranslationFunction
};

export type BaseContext = {
  api: RxApiInterface,
  // TODO: Set the correct type
  router: {
    route: {
      location: Location
    }
  }
};

export type KeydownEvent = KeyboardEvent & {
  value: string
};

export type InputOnChangeEvent = {
  event: React.SyntheticEvent<HTMLInputElement> | null
}

export type InputOnChangeEventData = {
  address?: string,
  currentPublicKey?: Uint8Array,
  data?: string,
  editedName?: string,
  extrinsic?: SectionItem<Extrinsics>,
  hash?: string,
  hex?: string,
  key?: SectionItem<Storages> | string,
  match?: string,
  params?: RawParams,
  password?: string,
  publicKey?: Uint8Array | null, // app-rpc Selection.tsx onChangeAccount
  name?: string,
  nominee?: string,
  nonce?: BN, // app-rpc Selection.tsx onChangeAccount
  rpc?: SectionItem<Interfaces>,
  section?: Extrinsic$Sections | Interface$Sections | Storage$Sections,
  seed?: string,
  signature?: string,
  withCase?: boolean,
  value?: boolean | KeyboardEvent | number | SectionItem<Extrinsics> | SectionItem<Interfaces> | SectionItem<Storages> | string | Uint8Array,
  // value: boolean | Extrinsic$Sections | Interface$Sections |  | number | RawParams | SectionItem<Extrinsics> | SectionItem<Interfaces> | SectionItem<Storages> | Storage$Sections | string | Uint8Array,
  values?: Array<RawParam>
}
