import { AssertTrue, IsExact } from "conditional-type-checks";
import { first } from "../src";

declare const ns: number[];
declare const ns1: [number, ...number[], number];
declare const ns2: [number, number, ...number[], number, number];
declare const t0: [];
declare const t1: [number];
declare const t2: [number, number];
declare const t3: [number, number, number];
declare const t4: [number, number, number, number];

const o1 = first(ns);
const n1 = first(ns1);
const n2 = first(ns2);
const u1 = first(t0);
const n3 = first(t1);
const n4 = first(t2);
const n5 = first(t3);
const n6 = first(t4);

type cases = [
  AssertTrue<IsExact<typeof o1, number | undefined>>,
  AssertTrue<IsExact<typeof n1, number>>,
  AssertTrue<IsExact<typeof n2, number>>,
  AssertTrue<IsExact<typeof u1, undefined>>,
  AssertTrue<IsExact<typeof n3, number>>,
  AssertTrue<IsExact<typeof n4, number>>,
  AssertTrue<IsExact<typeof n5, number>>,
  AssertTrue<IsExact<typeof n6, number>>
];
