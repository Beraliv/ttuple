import { AssertTrue, IsExact } from "conditional-type-checks";
import { toTuple } from "../src";

declare const numbers: number[];

const t1 = toTuple([1]);
const t2 = toTuple([1, 2]);
const t3 = toTuple([1, 2, 3]);
const t4 = toTuple([1, 2, 3, 4]);
const as = toTuple(numbers);

type cases = [
  AssertTrue<IsExact<typeof t1, [number]>>,
  AssertTrue<IsExact<typeof t2, [number, number]>>,
  AssertTrue<IsExact<typeof t3, [number, number, number]>>,
  AssertTrue<IsExact<typeof t4, [number, number, number, number]>>,
  AssertTrue<IsExact<typeof as, number[]>>
];
