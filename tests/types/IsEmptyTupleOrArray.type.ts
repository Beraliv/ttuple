import { AssertTrue, IsExact } from "conditional-type-checks";
import { IsEmptyTupleOrArray } from "../../src/types/IsEmptyTupleOrArray";

type cases = [
  AssertTrue<IsExact<IsEmptyTupleOrArray<readonly string[]>, true>>,
  AssertTrue<IsExact<IsEmptyTupleOrArray<string[]>, true>>,
  AssertTrue<IsExact<IsEmptyTupleOrArray<[string]>, false>>,
  AssertTrue<IsExact<IsEmptyTupleOrArray<[string, string]>, false>>,
  AssertTrue<
    IsExact<IsEmptyTupleOrArray<[string, ...string[], string]>, false>
  >,
  AssertTrue<IsExact<IsEmptyTupleOrArray<[]>, true>>
];
