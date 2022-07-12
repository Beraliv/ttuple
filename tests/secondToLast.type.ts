import { AssertTrue, IsExact } from "conditional-type-checks";
import { secondToLast } from "../src";

declare const ns: number[];
declare const ns1: [number, ...number[], number];
declare const ns2: [number, number, ...number[], number, number];
declare const t0: [];
declare const t1: [number];
declare const t2: [number, number];
declare const t3: [number, number, number];
declare const t4: [number, number, number, number];

const o1 = secondToLast(ns);
const o2 = secondToLast(ns1);
const n1 = secondToLast(ns2);
const u1 = secondToLast(t0);
const u2 = secondToLast(t1);
const n2 = secondToLast(t2);
const n3 = secondToLast(t3);
const n4 = secondToLast(t4);

type cases = [
  AssertTrue<IsExact<typeof o1, number | undefined>>,
  AssertTrue<IsExact<typeof o2, number | undefined>>,
  AssertTrue<IsExact<typeof n1, number>>,
  AssertTrue<IsExact<typeof u1, undefined>>,
  AssertTrue<IsExact<typeof u2, undefined>>,
  AssertTrue<IsExact<typeof n2, number>>,
  AssertTrue<IsExact<typeof n3, number>>,
  AssertTrue<IsExact<typeof n4, number>>
];
