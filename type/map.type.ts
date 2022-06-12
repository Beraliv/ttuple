import { AssertTrue, IsExact } from "conditional-type-checks";
import sta, {StronglyTypedArray} from "../src";

declare const numbers: number[];
declare const number1Tuple: [number];
declare const number2Tuple: [number, number];
declare const number3Tuple: [number, number, number];

const staNumbers = sta(numbers);
const staNumbersToStrings1 = staNumbers.map(String);
const staNumbersToStrings2 = staNumbers.map((value) => value.toString());
const staNumbersToStrings3 = staNumbers.map(
  (value, index) => `${value}-${index}`
);

const staNumber1Tuple = sta(number1Tuple);
const staNumber1TupleToString1Tuple1 = staNumber1Tuple.map(String);
const staNumber1TupleToString1Tuple2 = staNumber1Tuple.map((value) =>
  value.toString()
);
const staNumber1TupleToString1Tuple3 = staNumber1Tuple.map(
  (value, index) => `${value}-${index}`
);

const staNumber2Tuple = sta(number2Tuple);
const staNumber2TupleToString2Tuple1 = staNumber2Tuple.map(String);
const staNumber2TupleToString2Tuple2 = staNumber2Tuple.map((value) =>
  value.toString()
);
const staNumber2TupleToString2Tuple3 = staNumber2Tuple.map(
  (value, index) => `${value}-${index}`
);

const staNumber3Tuple = sta(number3Tuple);
const staNumber3TupleToString3Tuple1 = staNumber3Tuple.map(String);
const staNumber3TupleToString3Tuple2 = staNumber3Tuple.map((value) =>
  value.toString()
);
const staNumber3TupleToString3Tuple3 = staNumber3Tuple.map(
  (value, index) => `${value}-${index}`
);

type cases = [
  AssertTrue<IsExact<typeof staNumbers, StronglyTypedArray<number[]>>>,
  AssertTrue<
    IsExact<typeof staNumbersToStrings1, StronglyTypedArray<string[]>>
  >,
  AssertTrue<
    IsExact<typeof staNumbersToStrings2, StronglyTypedArray<string[]>>
  >,
  AssertTrue<
    IsExact<typeof staNumbersToStrings3, StronglyTypedArray<string[]>>
  >,
  AssertTrue<IsExact<typeof staNumber1Tuple, StronglyTypedArray<[number]>>>,
  AssertTrue<
    IsExact<typeof staNumber1TupleToString1Tuple1, StronglyTypedArray<[string]>>
  >,
  AssertTrue<
    IsExact<typeof staNumber1TupleToString1Tuple2, StronglyTypedArray<[string]>>
  >,
  AssertTrue<
    IsExact<typeof staNumber1TupleToString1Tuple3, StronglyTypedArray<[string]>>
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
      typeof staNumber2TupleToString2Tuple3,
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
  >,
  AssertTrue<
    IsExact<
      typeof staNumber3TupleToString3Tuple3,
      StronglyTypedArray<[string, string, string]>
    >
  >
];
