import { AssertTrue, IsExact } from "conditional-type-checks";
import StronglyTypedArray from ".";

declare const numbers: number[];
declare const number1Tuple: [number];
declare const number2Tuple: [number, number];
declare const number3Tuple: [number, number, number];

const staNumbers = new StronglyTypedArray(numbers);
const strings1 = staNumbers.map(String).toArray();
const strings2 = staNumbers.map((value) => value.toString()).toArray();

const staNumber1Tuple = new StronglyTypedArray(number1Tuple);
const string1Tuple1 = staNumber1Tuple.map(String).toArray();
const string1Tuple2 = staNumber1Tuple
  .map((value) => value.toString())
  .toArray();

const staNumber2Tuple = new StronglyTypedArray(number2Tuple);
const string2Tuple1 = staNumber2Tuple.map(String).toArray();
const string2Tuple2 = staNumber2Tuple
  .map((value) => value.toString())
  .toArray();

const staNumber3Tuple = new StronglyTypedArray(number3Tuple);
const string3Tuple1 = staNumber3Tuple.map(String).toArray();
const string3Tuple2 = staNumber3Tuple
  .map((value) => value.toString())
  .toArray();

type cases = [
  AssertTrue<IsExact<typeof strings1, string[]>>,
  AssertTrue<IsExact<typeof strings2, string[]>>,
  AssertTrue<IsExact<typeof string1Tuple1, [string]>>,
  AssertTrue<IsExact<typeof string1Tuple2, [string]>>,
  AssertTrue<IsExact<typeof string2Tuple1, [string, string]>>,
  AssertTrue<IsExact<typeof string2Tuple2, [string, string]>>,
  AssertTrue<IsExact<typeof string3Tuple1, [string, string, string]>>,
  AssertTrue<IsExact<typeof string3Tuple1, [string, string, string]>>
];
