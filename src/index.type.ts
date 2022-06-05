import { AssertTrue, IsExact } from "conditional-type-checks";
import StronglyTypedArray from "./";

declare const numbers: number[];
declare const number1Tuple: [number];
declare const number2Tuple: [number, number];
declare const number3Tuple: [number, number, number];

const staNumbers = new StronglyTypedArray(numbers);
const staNumbersToStrings = staNumbers.map(String);

const staNumber1Tuple = new StronglyTypedArray(number1Tuple);
const staNumber1TupleToString1Tuple = staNumber1Tuple.map(String);

const staNumber2Tuple = new StronglyTypedArray(number2Tuple);
const staNumber2TupleToString1Tuple = staNumber2Tuple.map(String);

const staNumber3Tuple = new StronglyTypedArray(number3Tuple);
const staNumber3TupleToString1Tuple = staNumber3Tuple.map(String);

type cases = [
  AssertTrue<IsExact<typeof staNumbers, StronglyTypedArray<number[]>>>,
  AssertTrue<IsExact<typeof staNumbersToStrings, StronglyTypedArray<string[]>>>,
  AssertTrue<IsExact<typeof staNumber1Tuple, StronglyTypedArray<[number]>>>,
  AssertTrue<
    IsExact<typeof staNumber1TupleToString1Tuple, StronglyTypedArray<[string]>>
  >,
  AssertTrue<
    IsExact<typeof staNumber2Tuple, StronglyTypedArray<[number, number]>>
  >,
  AssertTrue<
    IsExact<
      typeof staNumber2TupleToString1Tuple,
      StronglyTypedArray<[string, string]>
    >
  >,
  AssertTrue<
    IsExact<
      typeof staNumber3Tuple,
      StronglyTypedArray<[number, number, number]>
    >
  >,
  AssertTrue<
    IsExact<
      typeof staNumber3TupleToString1Tuple,
      StronglyTypedArray<[string, string, string]>
    >
  >
];
