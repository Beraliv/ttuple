import { AssertTrue, IsExact } from "conditional-type-checks";
import { IsTuple } from "../../src/types/IsTuple";

type cases = [
  AssertTrue<IsExact<IsTuple<readonly string[]>, false>>,
  AssertTrue<IsExact<IsTuple<string[]>, false>>,
  AssertTrue<IsExact<IsTuple<[string]>, true>>,
  AssertTrue<IsExact<IsTuple<[string, string]>, true>>,
  AssertTrue<IsExact<IsTuple<[string, ...string[], string]>, true>>,
  AssertTrue<IsExact<IsTuple<[]>, true>>,
  AssertTrue<IsExact<IsTuple<never[]>, true>>
];
