// Copyright 2017-2018 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { TranslationFunction } from 'i18next';
import { Extrinsics, Extrinsic$Sections } from '@polkadot/extrinsics/types';
import { Interfaces, Interface$Sections } from '@polkadot/jsonrpc/types';
import { RxApiInterface } from '@polkadot/api-rx/types';
import { SectionItem } from '@polkadot/params/types';
import { Storages, Storage$Sections } from '@polkadot/storage/types';

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

export type InputOnChangeEventData = {
  value: boolean | Extrinsic$Sections | Interface$Sections | number | SectionItem<Extrinsics> | SectionItem<Interfaces> | SectionItem<Storages> | Storage$Sections | string | Uint8Array
}
