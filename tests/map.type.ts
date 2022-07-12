import { AssertTrue, IsExact } from "conditional-type-checks";
import { map } from "../src";

declare const numbers: number[];
declare const number1Tuple: [number];
declare const number2Tuple: [number, number];
declare const number3Tuple: [number, number, number];

const numberToStringCb1 = (value: number) => value.toString();
const numberToStringCb2 = (value: number, index: number) => `${value}-${index}`;

const numbersToStrings1 = map(String, numbers);
const numbersToStrings2 = map(numberToStringCb1, numbers);
const numbersToStrings3 = map(numberToStringCb2, numbers);

const number1TupleToString1Tuple1 = map(String, number1Tuple);
const number1TupleToString1Tuple2 = map(numberToStringCb1, number1Tuple);
const number1TupleToString1Tuple3 = map(numberToStringCb2, number1Tuple);

const number2TupleToString2Tuple1 = map(String, number2Tuple);
const number2TupleToString2Tuple2 = map(numberToStringCb1, number2Tuple);
const number2TupleToString2Tuple3 = map(numberToStringCb2, number2Tuple);

const number3TupleToString3Tuple1 = map(String, number3Tuple);
const number3TupleToString3Tuple2 = map(numberToStringCb1, number3Tuple);
const number3TupleToString3Tuple3 = map(numberToStringCb2, number3Tuple);

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
