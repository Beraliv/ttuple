import { AssertTrue, IsExact } from "conditional-type-checks";
import { ParallelShift } from "../../src/types/ParallelShift";

type A = string[];
type SAS = [string, ...A, string];
type SSASS = [string, ...SAS, string];

type T0 = [];
type T1 = [string];
type T2 = [string, string];

type cases = [
  AssertTrue<IsExact<ParallelShift<A, A>, string | undefined>>,
  AssertTrue<IsExact<ParallelShift<A, SAS>, string | undefined>>,
  AssertTrue<IsExact<ParallelShift<A, SSASS>, string | undefined>>,
  AssertTrue<IsExact<ParallelShift<T0, A>, undefined>>,
  AssertTrue<IsExact<ParallelShift<T0, SAS>, undefined>>,
  AssertTrue<IsExact<ParallelShift<T0, SSASS>, undefined>>,
  AssertTrue<IsExact<ParallelShift<T1, A>, string>>,
  AssertTrue<IsExact<ParallelShift<T1, SAS>, undefined>>,
  AssertTrue<IsExact<ParallelShift<T1, SSASS>, undefined>>,
  AssertTrue<IsExact<ParallelShift<T2, A>, string>>,
  AssertTrue<IsExact<ParallelShift<T2, SAS>, string>>,
  AssertTrue<IsExact<ParallelShift<T2, SSASS>, undefined>>
];
