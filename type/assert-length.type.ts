import { AssertTrue, IsExact } from "conditional-type-checks";
import sta from "../src";

declare const numbers: number[];

const staNumbers = sta(numbers);

const sameNumbers = staNumbers
  .assertLength(">= 0", () => new Error("Length cannot be negative"))
  .toArray();
const numbers1 = staNumbers
  .assertLength(">= 1", () => new Error("Expected to have at least 1 element"))
  .toArray();
const numbers2 = staNumbers
  .assertLength(">= 2", () => new Error("Expected to have at least 2 element"))
  .toArray();
const numbers3 = staNumbers
  .assertLength(">= 3", () => new Error("Expected to have at least 3 element"))
  .toArray();
const numbers4 = staNumbers
  .assertLength(">= 4", () => new Error("Expected to have at least 4 element"))
  .toArray();
const numbers5 = staNumbers
  .assertLength(">= 5", () => new Error("Expected to have at least 5 element"))
  .toArray();
const numbers6 = staNumbers
  .assertLength(">= 6", () => new Error("Expected to have at least 6 element"))
  .toArray();
const numbers7 = staNumbers
  .assertLength(">= 7", () => new Error("Expected to have at least 7 element"))
  .toArray();
const numbers8 = staNumbers
  .assertLength(">= 8", () => new Error("Expected to have at least 8 element"))
  .toArray();
const numbers9 = staNumbers
  .assertLength(">= 9", () => new Error("Expected to have at least 9 element"))
  .toArray();
const numbers10 = staNumbers
  .assertLength(
    ">= 10",
    () => new Error("Expected to have at least 10 element")
  )
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
