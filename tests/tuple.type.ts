import { AssertTrue, IsExact } from "conditional-type-checks";
import sta from "../src";

const staNumberTuple1 = sta([1]).toArray();
const staNumberTuple2 = sta([1, 2]).toArray();
const staNumberTuple3 = sta([1, 2, 3]).toArray();
const staNumberTuple4 = sta([1, 2, 3, 4]).toArray();

type cases = [
  AssertTrue<IsExact<typeof staNumberTuple1, [number]>>,
  AssertTrue<IsExact<typeof staNumberTuple2, [number, number]>>,
  AssertTrue<IsExact<typeof staNumberTuple3, [number, number, number]>>,
  AssertTrue<IsExact<typeof staNumberTuple4, [number, number, number, number]>>
];
