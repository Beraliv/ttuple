import { AssertTrue, IsExact } from "conditional-type-checks";
import { IsEmptyTuple } from "../../src/types/IsEmptyTuple";

type cases = [
  AssertTrue<IsExact<IsEmptyTuple<readonly string[]>, false>>,
  AssertTrue<IsExact<IsEmptyTuple<string[]>, false>>,
  AssertTrue<IsExact<IsEmptyTuple<[string]>, false>>,
  AssertTrue<IsExact<IsEmptyTuple<[string, string]>, false>>,
  AssertTrue<IsExact<IsEmptyTuple<[string, ...string[], string]>, false>>,
  AssertTrue<IsExact<IsEmptyTuple<[]>, true>>,
  AssertTrue<IsExact<IsEmptyTuple<never[]>, false>>
];
