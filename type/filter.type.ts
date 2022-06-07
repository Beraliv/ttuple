import { AssertTrue, IsExact } from "conditional-type-checks";
import StronglyTypedArray from "../src";

declare const numbers: number[];
declare const number1Tuple: [number];
declare const number2Tuple: [number, number];
declare const number3Tuple: [number, number, number];

const isOneToThree = (value: number): value is 1 | 2 | 3 =>
  [1, 2, 3].includes(value);

const staNumbers = new StronglyTypedArray(numbers);
const staNumbers1 = staNumbers.filter(Boolean);
const staNumbers2 = staNumbers.filter(isOneToThree);

const staNumber1Tuple = new StronglyTypedArray(number1Tuple);
const staNumber1Tuple1 = staNumber1Tuple.filter(Boolean);
const staNumber1Tuple2 = staNumber1Tuple.filter(isOneToThree);

const staNumber2Tuple = new StronglyTypedArray(number2Tuple);
const staNumber2Tuple1 = staNumber2Tuple.filter(Boolean);
const staNumber2Tuple2 = staNumber2Tuple.filter(isOneToThree);

const staNumber3Tuple = new StronglyTypedArray(number3Tuple);
const staNumber3Tuple1 = staNumber3Tuple.filter(Boolean);
const staNumber3Tuple2 = staNumber3Tuple.filter(isOneToThree);

type cases = [
  AssertTrue<IsExact<typeof staNumbers, StronglyTypedArray<number[]>>>,
  AssertTrue<IsExact<typeof staNumbers1, StronglyTypedArray<number[]>>>,
  AssertTrue<IsExact<typeof staNumbers2, StronglyTypedArray<(1 | 2 | 3)[]>>>,
  AssertTrue<IsExact<typeof staNumber1Tuple, StronglyTypedArray<[number]>>>,
  AssertTrue<IsExact<typeof staNumber1Tuple1, StronglyTypedArray<number[]>>>,
  AssertTrue<
    IsExact<typeof staNumber1Tuple2, StronglyTypedArray<(1 | 2 | 3)[]>>
  >,
  AssertTrue<
    IsExact<typeof staNumber2Tuple, StronglyTypedArray<[number, number]>>
  >,
  AssertTrue<IsExact<typeof staNumber2Tuple1, StronglyTypedArray<number[]>>>,
  AssertTrue<
    IsExact<typeof staNumber2Tuple2, StronglyTypedArray<(1 | 2 | 3)[]>>
  >,
  AssertTrue<
    IsExact<
      typeof staNumber3Tuple,
      StronglyTypedArray<[number, number, number]>
    >
  >,
  AssertTrue<IsExact<typeof staNumber3Tuple1, StronglyTypedArray<number[]>>>,
  AssertTrue<
    IsExact<typeof staNumber3Tuple2, StronglyTypedArray<(1 | 2 | 3)[]>>
  >
];
