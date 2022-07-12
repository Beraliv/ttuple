import { AssertTrue, IsExact } from "conditional-type-checks";
import { ParallelShift } from "../../src/types/ParallelShift";

type T0 = string[];
type T1 = [string, ...T0, string];
type T2 = [string, ...T1, string];
type T3 = [string, ...T2, string];

type cases = [
  AssertTrue<IsExact<ParallelShift<T0, T0>, string | undefined>>,
  AssertTrue<IsExact<ParallelShift<T1, T0>, string>>,
  AssertTrue<IsExact<ParallelShift<T2, T0>, string>>,
  AssertTrue<IsExact<ParallelShift<T0, T1>, string | undefined>>,
  AssertTrue<IsExact<ParallelShift<T1, T1>, string | undefined>>,
  AssertTrue<IsExact<ParallelShift<T2, T1>, string>>,
  AssertTrue<IsExact<ParallelShift<T0, T2>, string | undefined>>,
  AssertTrue<IsExact<ParallelShift<T1, T2>, string | undefined>>,
  AssertTrue<IsExact<ParallelShift<T2, T2>, string | undefined>>
];