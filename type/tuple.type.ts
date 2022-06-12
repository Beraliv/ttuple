import { AssertTrue, IsExact } from "conditional-type-checks";
import sta, {StronglyTypedArray} from "../src";

const staNumberTuple1 = sta([1]);
const staNumberTuple2 = sta([1, 2]);
const staNumberTuple3 = sta([1, 2, 3]);
const staNumberTuple4 = sta([1, 2, 3, 4]);

type cases = [
  AssertTrue<IsExact<typeof staNumberTuple1, StronglyTypedArray<[number]>>>,
  AssertTrue<IsExact<typeof staNumberTuple2, StronglyTypedArray<[number, number]>>>,
  AssertTrue<IsExact<typeof staNumberTuple3, StronglyTypedArray<[number, number, number]>>>,
  AssertTrue<IsExact<typeof staNumberTuple4, StronglyTypedArray<[number, number, number, number]>>>,
];
