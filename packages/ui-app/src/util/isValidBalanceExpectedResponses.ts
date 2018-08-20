// Copyright 2017-2018 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { IsValidWithMessage } from './types';

export enum ErrorMessage {
  BalanceMustContainOnlySingleEOrPlus = 'Scientific notation may only contain one instance of \'e\' for scientific notation or exponential with \'e+\'',
  BalanceInExponentialNotationMustHaveExponent = 'Exponential \'e+\' notation when used must be followed by a number',
  BalanceInScientificNotationMustHaveExponent = 'Scientific notation \'e\' when used must be followed by a number',
  BalanceMustBeNumber = 'Balance to transfer in DOTs must be a number or expressed in scientific notation (i.e. 3.4e38) or exponential with \'e+\'',
  BalanceMinimumRequired = 'Balance to transfer in DOTs must be greater than zero',
  BalanceMustBeFinite = 'Balance to transfer in DOTs must not be infinite',
  BalanceWithDecimalsOnlyWithE = 'Decimals points are only allowed in scientific notation by using an \'e\' (i.e. 3.4e38) or exponential with \'e+\'',
  BalanceExceedsMaximum = 'Balance exceeds maximum for 128 bit',
  BalanceExceedsMaximumScientificNotation = 'Balance value after converting from scientific notation exceeds maximum for 128 bit',
  BalanceExceedsMaximumExponentialNotation = 'Balance value after converting from exponential notation exceeds maximum for 128 bit'
}

export const expectedIsValidResponse = (isValid: boolean = false, errorMessage?: ErrorMessage, infoMessage?: string, inputConvertedFromScientificNotation?: string): IsValidWithMessage => {
  let response: IsValidWithMessage = { isValid: isValid };
  if (errorMessage) {
    response.errorMessage = errorMessage;
  }
  if (infoMessage) {
    response.infoMessage = infoMessage;
  }
  if (inputConvertedFromScientificNotation) {
    response.inputConvertedFromScientificNotation = inputConvertedFromScientificNotation;
  }
  return response;
};