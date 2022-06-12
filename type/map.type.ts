import { AssertTrue, IsExact } from "conditional-type-checks";
import sta, { StronglyTypedArray } from "../src";

declare const numbers: number[];
declare const number1Tuple: [number];
declare const number2Tuple: [number, number];
declare const number3Tuple: [number, number, number];

const staNumbers = sta(numbers);
const numbersToStrings1 = staNumbers.map(String).toArray();
const numbersToStrings2 = staNumbers.map((value) => value.toString()).toArray();
const numbersToStrings3 = staNumbers
  .map((value, index) => `${value}-${index}`)
  .toArray();

const staNumber1Tuple = sta(number1Tuple);
const number1TupleToString1Tuple1 = staNumber1Tuple.map(String).toArray();
const number1TupleToString1Tuple2 = staNumber1Tuple
  .map((value) => value.toString())
  .toArray();
const number1TupleToString1Tuple3 = staNumber1Tuple
  .map((value, index) => `${value}-${index}`)
  .toArray();

const staNumber2Tuple = sta(number2Tuple);
const number2TupleToString2Tuple1 = staNumber2Tuple.map(String).toArray();
const number2TupleToString2Tuple2 = staNumber2Tuple
  .map((value) => value.toString())
  .toArray();
const number2TupleToString2Tuple3 = staNumber2Tuple
  .map((value, index) => `${value}-${index}`)
  .toArray();

const staNumber3Tuple = sta(number3Tuple);
const number3TupleToString3Tuple1 = staNumber3Tuple.map(String).toArray();
const number3TupleToString3Tuple2 = staNumber3Tuple
  .map((value) => value.toString())
  .toArray();
const number3TupleToString3Tuple3 = staNumber3Tuple
  .map((value, index) => `${value}-${index}`)
  .toArray();

type cases = [
  AssertTrue<IsExact<typeof numbersToStrings1, string[]>>,
  AssertTrue<IsExact<typeof numbersToStrings2, string[]>>,
  AssertTrue<IsExact<typeof numbersToStrings3, string[]>>,
  AssertTrue<IsExact<typeof number1TupleToString1Tuple1, [string]>>,
  AssertTrue<IsExact<typeof number1TupleToString1Tuple2, [string]>>,
  AssertTrue<IsExact<typeof number1TupleToString1Tuple3, [string]>>,
  AssertTrue<IsExact<typeof number2TupleToString2Tuple1, [string, string]>>,
  AssertTrue<IsExact<typeof number2TupleToString2Tuple2, [string, string]>>,
  AssertTrue<IsExact<typeof number2TupleToString2Tuple3, [string, string]>>,
  AssertTrue<
    IsExact<typeof number3TupleToString3Tuple1, [string, string, string]>
  >,
  AssertTrue<
    IsExact<typeof number3TupleToString3Tuple2, [string, string, string]>
  >,
  AssertTrue<
    IsExact<typeof number3TupleToString3Tuple3, [string, string, string]>
  >
];
