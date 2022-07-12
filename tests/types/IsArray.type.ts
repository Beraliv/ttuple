import { AssertTrue, IsExact } from "conditional-type-checks";
import { IsArray } from "../../src/types/IsArray";

type cases = [
  AssertTrue<IsExact<IsArray<readonly string[]>, true>>,
  AssertTrue<IsExact<IsArray<string[]>, true>>,
  AssertTrue<IsExact<IsArray<[string]>, false>>,
  AssertTrue<IsExact<IsArray<[string, string]>, false>>,
  AssertTrue<IsExact<IsArray<[string, ...string[], string]>, false>>,
  AssertTrue<IsExact<IsArray<[]>, false>>,
  AssertTrue<IsExact<IsArray<never[]>, false>>
];
