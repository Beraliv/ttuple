import { AssertTrue, IsExact } from "conditional-type-checks";
import { Map } from "../../src/types/Map";

type RA = readonly string[];
type A = string[];
type T0 = [];
type T1 = [string];
type T2 = [string, string];
type T3 = [string, string, string];

type cases = [
  AssertTrue<IsExact<Map<RA, number>, number[]>>,
  AssertTrue<IsExact<Map<A, number>, number[]>>,
  AssertTrue<IsExact<Map<T0, number>, []>>,
  AssertTrue<IsExact<Map<T1, number>, [number]>>,
  AssertTrue<IsExact<Map<T2, number>, [number, number]>>,
  AssertTrue<IsExact<Map<T3, number>, [number, number, number]>>
];
