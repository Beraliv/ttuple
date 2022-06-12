import { AssertTrue, IsExact } from "conditional-type-checks";
import sta from "../src";

declare const numbers: number[];

const staNumbers = sta(numbers);

const firstOptional = staNumbers.length('>= 0', () => new Error('Length cannot be negative')).at(0);
const first = staNumbers.length('>= 1', () => new Error('Missing elements')).at(0);
const secondOptional = staNumbers.length('>= 1', () => new Error('Missing elements')).at(1);
const second = staNumbers.length('>= 2', () => new Error('Missing elements')).at(1);
const beforeLastOptional = staNumbers.length('>= 1', () => new Error('Missing elements')).at(-2);
const beforeLast = staNumbers.length('>= 2', () => new Error('Missing elements')).at(-2);
const lastOptional = staNumbers.length('>= 0', () => new Error('Length cannot be negative')).at(-1);
const last = staNumbers.length('>= 1', () => new Error('Missing elements')).at(-1);

type cases = [
  AssertTrue<IsExact<typeof firstOptional, number | undefined>>,
  AssertTrue<IsExact<typeof first, number>>,
  AssertTrue<IsExact<typeof secondOptional, number | undefined>>,
  AssertTrue<IsExact<typeof second, number>>,
  AssertTrue<IsExact<typeof beforeLast, number>>,
  AssertTrue<IsExact<typeof beforeLastOptional, number | undefined>>,
  AssertTrue<IsExact<typeof last, number>>,
  AssertTrue<IsExact<typeof lastOptional, number | undefined>>,
];
