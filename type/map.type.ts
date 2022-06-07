import { AssertTrue, IsExact } from "conditional-type-checks";
import StronglyTypedArray from "../src";

declare const numbers: number[];
declare const number1Tuple: [number];
declare const number2Tuple: [number, number];
declare const number3Tuple: [number, number, number];

const staNumbers = new StronglyTypedArray(numbers);
const staNumbersToStrings1 = staNumbers.map(String);
const staNumbersToStrings2 = staNumbers.map((value) => value.toString());

const staNumber1Tuple = new StronglyTypedArray(number1Tuple);
const staNumber1TupleToString1Tuple1 = staNumber1Tuple.map(String);
const staNumber1TupleToString1Tuple2 = staNumber1Tuple.map((value) =>
  value.toString()
);

const staNumber2Tuple = new StronglyTypedArray(number2Tuple);
const staNumber2TupleToString2Tuple1 = staNumber2Tuple.map(String);
const staNumber2TupleToString2Tuple2 = staNumber2Tuple.map((value) =>
  value.toString()
);

const staNumber3Tuple = new StronglyTypedArray(number3Tuple);
const staNumber3TupleToString3Tuple1 = staNumber3Tuple.map(String);
const staNumber3TupleToString3Tuple2 = staNumber3Tuple.map((value) =>
  value.toString()
);

type cases = [
  AssertTrue<IsExact<typeof staNumbers, StronglyTypedArray<number[]>>>,
  AssertTrue<
    IsExact<typeof staNumbersToStrings1, StronglyTypedArray<string[]>>
  >,
  AssertTrue<
    IsExact<typeof staNumbersToStrings2, StronglyTypedArray<string[]>>
  >,
  AssertTrue<IsExact<typeof staNumber1Tuple, StronglyTypedArray<[number]>>>,
  AssertTrue<
    IsExact<typeof staNumber1TupleToString1Tuple1, StronglyTypedArray<[string]>>
  >,
  AssertTrue<
    IsExact<typeof staNumber1TupleToString1Tuple2, StronglyTypedArray<[string]>>
  >,
  AssertTrue<
    IsExact<typeof staNumber2Tuple, StronglyTypedArray<[number, number]>>
  >,
  AssertTrue<
    IsExact<
      typeof staNumber2TupleToString2Tuple1,
      StronglyTypedArray<[string, string]>
    >
  >,
  AssertTrue<
    IsExact<
      typeof staNumber2TupleToString2Tuple2,
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
      typeof staNumber3TupleToString3Tuple1,
      StronglyTypedArray<[string, string, string]>
    >
  >,
  AssertTrue<
    IsExact<
      typeof staNumber3TupleToString3Tuple2,
      StronglyTypedArray<[string, string, string]>
    >
  >
];
