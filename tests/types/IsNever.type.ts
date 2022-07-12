import { AssertTrue, IsExact } from "conditional-type-checks";
import { IsNever } from "../../src/types/IsNever";

type cases = [
  AssertTrue<IsExact<IsNever<never>, true>>,
  AssertTrue<IsExact<IsNever<number>, false>>,
  AssertTrue<IsExact<IsNever<string>, false>>,
  AssertTrue<IsExact<IsNever<boolean>, false>>,
  AssertTrue<IsExact<IsNever<number[]>, false>>,
  AssertTrue<IsExact<IsNever<{ a: string }>, false>>
];
