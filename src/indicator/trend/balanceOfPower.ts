// Copyright (c) 2022 Onur Cinar. All Rights Reserved.
// https://github.com/cinar/indicatorts

import { divide, substract } from '../../helper/numArray';

/**
 * The Balance of Power (BOP) function calculates the strength of buying and
 * selling pressure. Positive value indicates an upward trend, and negative
 * value indicates a downward trend. Zero indicates a balance between
 * the two.
 *
 * BOP = (Closing - Opening) / (High - Low)
 *
 * @param openings opening values.
 * @param highs high values.
 * @param lows low values.
 * @param closings closing values.
 * @return balance of power values.
 */
export function balanceOfPower(
  openings: number[],
  highs: number[],
  lows: number[],
  closings: number[]
): number[] {
  return divide(substract(closings, openings), substract(highs, lows));
}
