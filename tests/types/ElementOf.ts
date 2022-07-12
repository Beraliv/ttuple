import { AssertTrue, IsExact } from "conditional-type-checks";
import { ElementOf } from "../../src/types/ElementOf";

type cases = [
  AssertTrue<IsExact<ElementOf<readonly string[]>, string>>,
  AssertTrue<IsExact<ElementOf<string[]>, string>>,
  AssertTrue<IsExact<ElementOf<[string]>, string>>,
  AssertTrue<IsExact<ElementOf<[string, string]>, string>>,
  AssertTrue<IsExact<ElementOf<[string, ...string[], string]>, string>>,
  AssertTrue<IsExact<ElementOf<[]>, never>>
];
