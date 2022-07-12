import { AssertTrue, IsExact } from "conditional-type-checks";
import { length } from "../src";

declare const numbers: number[];

type A = number[];
type NAN = [number, ...number[], number];
type N2AN2 = [number, ...NAN, number];
type N3AN3 = [number, ...N2AN2, number];
type N4AN4 = [number, ...N3AN3, number];
type N5AN5 = [number, ...N4AN4, number];
type N6AN6 = [number, ...N5AN5, number];
type N7AN7 = [number, ...N6AN6, number];
type N8AN8 = [number, ...N7AN7, number];
type N9AN9 = [number, ...N8AN8, number];
type N10AN10 = [number, ...N9AN9, number];

const sameNumbers = length(numbers, ">= 0") ? numbers : null;
const numbers1 = length(numbers, ">= 1") ? numbers : null;
const numbers2 = length(numbers, ">= 2") ? numbers : null;
const numbers3 = length(numbers, ">= 3") ? numbers : null;
const numbers4 = length(numbers, ">= 4") ? numbers : null;
const numbers5 = length(numbers, ">= 5") ? numbers : null;
const numbers6 = length(numbers, ">= 6") ? numbers : null;
const numbers7 = length(numbers, ">= 7") ? numbers : null;
const numbers8 = length(numbers, ">= 8") ? numbers : null;
const numbers9 = length(numbers, ">= 9") ? numbers : null;
const numbers10 = length(numbers, ">= 10") ? numbers : null;

type cases = [
  AssertTrue<IsExact<typeof sameNumbers, A | null>>,
  AssertTrue<IsExact<typeof numbers1, NAN | null>>,
  AssertTrue<IsExact<typeof numbers2, N2AN2 | null>>,
  AssertTrue<IsExact<typeof numbers3, N3AN3 | null>>,
  AssertTrue<IsExact<typeof numbers4, N4AN4 | null>>,
  AssertTrue<IsExact<typeof numbers5, N5AN5 | null>>,
  AssertTrue<IsExact<typeof numbers6, N6AN6 | null>>,
  AssertTrue<IsExact<typeof numbers7, N7AN7 | null>>,
  AssertTrue<IsExact<typeof numbers8, N8AN8 | null>>,
  AssertTrue<IsExact<typeof numbers9, N9AN9 | null>>,
  AssertTrue<IsExact<typeof numbers10, N10AN10 | null>>
];
