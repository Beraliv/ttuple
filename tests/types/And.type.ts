import { AssertTrue, IsExact } from "conditional-type-checks";
import { And } from "../../src/types/And";

type cases = [
  AssertTrue<IsExact<And<true, true>, true>>,
  AssertTrue<IsExact<And<true, false>, false>>,
  AssertTrue<IsExact<And<false, true>, false>>,
  AssertTrue<IsExact<And<false, false>, false>>
];
