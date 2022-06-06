import { AssertTrue, IsExact } from "conditional-type-checks";
import StronglyTypedArray from ".";

declare const numbers: number[];

const staNumbers = new StronglyTypedArray(numbers);

const staNumbersAtLeast1Tuple = staNumbers.hasAtLeast(1) ? staNumbers : null;
const staNumbersAtLeast2Tuple = staNumbers.hasAtLeast(2) ? staNumbers : null;
const staNumbersAtLeast5Tuple = staNumbers.hasAtLeast(5) ? staNumbers : null;
const staNumbersAtLeast10Tuple = staNumbers.hasAtLeast(10) ? staNumbers : null;

type cases = [
  AssertTrue<IsExact<typeof staNumbers, StronglyTypedArray<number[]>>>,
  AssertTrue<
    IsExact<
      typeof staNumbersAtLeast1Tuple,
      StronglyTypedArray<[number, ...number[]]> | null
    >
  >,
  AssertTrue<
    IsExact<
      typeof staNumbersAtLeast2Tuple,
      StronglyTypedArray<[number, number, ...number[]]> | null
    >
  >,
  AssertTrue<
    IsExact<
      typeof staNumbersAtLeast5Tuple,
      StronglyTypedArray<
        [number, number, number, number, number, ...number[]]
      > | null
    >
  >,
  AssertTrue<
    IsExact<
      typeof staNumbersAtLeast10Tuple,
      StronglyTypedArray<
        [
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          ...number[]
        ]
      > | null
    >
  >
];
