import { AssertTrue, IsExact } from "conditional-type-checks";
import { TupleToArray } from "../../src/types/TupleToArray";

type cases = [
  AssertTrue<IsExact<TupleToArray<readonly string[]>, string[]>>,
  AssertTrue<IsExact<TupleToArray<string[]>, string[]>>,
  AssertTrue<IsExact<TupleToArray<[string]>, string[]>>,
  AssertTrue<IsExact<TupleToArray<[string, string]>, string[]>>,
  AssertTrue<IsExact<TupleToArray<[string, ...string[], string]>, string[]>>,
  AssertTrue<IsExact<TupleToArray<[]>, never[]>>
];
