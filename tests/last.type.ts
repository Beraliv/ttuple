import { AssertTrue, IsExact } from "conditional-type-checks";
import { last } from "../src";

declare const ns: number[];
declare const ns1: [number, ...number[], number];
declare const ns2: [number, number, ...number[], number, number];
declare const t0: [];
declare const t1: [number];
declare const t2: [number, number];
declare const t3: [number, number, number];
declare const t4: [number, number, number, number];

const o1 = last(ns);
const n1 = last(ns1);
const n2 = last(ns2);
const u1 = last(t0);
const n3 = last(t1);
const n4 = last(t2);
const n5 = last(t3);
const n6 = last(t4);

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
