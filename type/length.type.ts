import { AssertTrue, IsExact } from "conditional-type-checks";
import sta from "../src";

declare const numbers: number[];

const staNumbers = sta(numbers);

const sameNumbers = staNumbers
  .length(">= 0", () => new Error("Length cannot be negative"))
  .toArray();
const numbers1 = staNumbers
  .length(">= 1", () => new Error("Expected to have at least 1 element"))
  .toArray();
const numbers2 = staNumbers
  .length(">= 2", () => new Error("Expected to have at least 2 element"))
  .toArray();
const numbers3 = staNumbers
  .length(">= 3", () => new Error("Expected to have at least 3 element"))
  .toArray();
const numbers4 = staNumbers
  .length(">= 4", () => new Error("Expected to have at least 4 element"))
  .toArray();
const numbers5 = staNumbers
  .length(">= 5", () => new Error("Expected to have at least 5 element"))
  .toArray();
const numbers6 = staNumbers
  .length(">= 6", () => new Error("Expected to have at least 6 element"))
  .toArray();
const numbers7 = staNumbers
  .length(">= 7", () => new Error("Expected to have at least 7 element"))
  .toArray();
const numbers8 = staNumbers
  .length(">= 8", () => new Error("Expected to have at least 8 element"))
  .toArray();
const numbers9 = staNumbers
  .length(">= 9", () => new Error("Expected to have at least 9 element"))
  .toArray();
const numbers10 = staNumbers
  .length(">= 10", () => new Error("Expected to have at least 10 element"))
  .toArray();

type cases = [
  AssertTrue<IsExact<typeof sameNumbers, number[]>>,
  AssertTrue<IsExact<typeof numbers1, [number, ...number[], number]>>,
  AssertTrue<
    IsExact<typeof numbers2, [number, number, ...number[], number, number]>
  >,
  AssertTrue<
    IsExact<
      typeof numbers3,
      [number, number, number, ...number[], number, number, number]
    >
  >,
  AssertTrue<
    IsExact<
      typeof numbers4,
      [
        number,
        number,
        number,
        number,
        ...number[],
        number,
        number,
        number,
        number
      ]
    >
  >,
  AssertTrue<
    IsExact<
      typeof numbers5,
      [
        number,
        number,
        number,
        number,
        number,
        ...number[],
        number,
        number,
        number,
        number,
        number
      ]
    >
  >,
  AssertTrue<
    IsExact<
      typeof numbers6,
      [
        number,
        number,
        number,
        number,
        number,
        number,
        ...number[],
        number,
        number,
        number,
        number,
        number,
        number
      ]
    >
  >,
  AssertTrue<
    IsExact<
      typeof numbers7,
      [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        ...number[],
        number,
        number,
        number,
        number,
        number,
        number,
        number
      ]
    >
  >,
  AssertTrue<
    IsExact<
      typeof numbers8,
      [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        ...number[],
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
      ]
    >
  >,
  AssertTrue<
    IsExact<
      typeof numbers9,
      [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        ...number[],
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
      ]
    >
  >,
  AssertTrue<
    IsExact<
      typeof numbers10,
      [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        ...number[],
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
      ]
    >
  >
];
