import { AssertTrue, IsExact } from "conditional-type-checks";
import { IsFiniteTuple } from "../../src/types/IsFiniteTuple";

type cases = [
  AssertTrue<IsExact<IsFiniteTuple<readonly string[]>, false>>,
  AssertTrue<IsExact<IsFiniteTuple<string[]>, false>>,
  AssertTrue<IsExact<IsFiniteTuple<[string]>, true>>,
  AssertTrue<IsExact<IsFiniteTuple<[string, string]>, true>>,
  AssertTrue<IsExact<IsFiniteTuple<[string, ...string[], string]>, false>>,
  AssertTrue<IsExact<IsFiniteTuple<[]>, true>>,
  AssertTrue<IsExact<IsFiniteTuple<never[]>, false>>
];
