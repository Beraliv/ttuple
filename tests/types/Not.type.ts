import { AssertTrue, IsExact } from "conditional-type-checks";
import { Not } from "../../src/types/Not";

type cases = [
  AssertTrue<IsExact<Not<true>, false>>,
  AssertTrue<IsExact<Not<false>, true>>,
  AssertTrue<IsExact<Not<boolean>, boolean>>,
  // @ts-expect-error: Type 'number' does not satisfy the constraint 'boolean'
  Not<number>
];
