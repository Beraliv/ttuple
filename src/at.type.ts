import { AssertTrue, IsExact } from "conditional-type-checks";
import StronglyTypedArray from ".";

declare const numbers: number[];
declare const defaultNumber: number;

const staNumbers = new StronglyTypedArray(numbers);

const withDefaultValue = <N extends number, I extends number>(
  length: N,
  index: I
) =>
  staNumbers.hasAtLeast(
    length,
    (numbers) => numbers.at(index),
    () => defaultNumber
  );
const withoutDefaultValue = <N extends number, I extends number>(
  length: N,
  index: I
) =>
  staNumbers.hasAtLeast(
    length,
    (numbers) => numbers.at(index),
    () => undefined
  );

const W_00 = withDefaultValue(0, 0);
const WO_00 = withoutDefaultValue(0, 0);
const W_01 = withDefaultValue(0, 1);
const WO_01 = withoutDefaultValue(0, 1);
const W_02 = withDefaultValue(0, 2);
const WO_02 = withoutDefaultValue(0, 2);

const W_10 = withDefaultValue(1, 0);
const WO_10 = withoutDefaultValue(1, 0);
const W_11 = withDefaultValue(1, 1);
const WO_11 = withoutDefaultValue(1, 1);
const W_12 = withDefaultValue(1, 2);
const WO_12 = withoutDefaultValue(1, 2);

const W_20 = withDefaultValue(2, 0);
const WO_20 = withoutDefaultValue(2, 0);
const W_21 = withDefaultValue(2, 1);
const WO_21 = withoutDefaultValue(2, 1);
const W_22 = withDefaultValue(2, 2);
const WO_22 = withoutDefaultValue(2, 2);

type cases = [
  AssertTrue<IsExact<typeof staNumbers, StronglyTypedArray<number[]>>>,
  AssertTrue<IsExact<typeof W_00, number>>,
  AssertTrue<IsExact<typeof WO_00, number | undefined>>,
  AssertTrue<IsExact<typeof W_01, number>>,
  AssertTrue<IsExact<typeof WO_01, undefined>>,
  AssertTrue<IsExact<typeof W_02, number>>,
  AssertTrue<IsExact<typeof WO_02, undefined>>,

  AssertTrue<IsExact<typeof W_10, number>>,
  AssertTrue<IsExact<typeof WO_10, number>>,
  AssertTrue<IsExact<typeof W_11, number>>,
  AssertTrue<IsExact<typeof WO_11, number | undefined>>,
  AssertTrue<IsExact<typeof W_12, number>>,
  AssertTrue<IsExact<typeof WO_12, undefined>>,

  AssertTrue<IsExact<typeof W_20, number>>,
  AssertTrue<IsExact<typeof WO_20, number>>,
  AssertTrue<IsExact<typeof W_21, number>>,
  AssertTrue<IsExact<typeof WO_21, number>>,
  AssertTrue<IsExact<typeof W_22, number>>,
  AssertTrue<IsExact<typeof WO_22, number | undefined>>
];
