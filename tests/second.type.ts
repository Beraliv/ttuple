import { AssertTrue, IsExact } from "conditional-type-checks";
import { second } from "../src";

declare const ns: number[];
declare const ns1: [number, ...number[], number];
declare const ns2: [number, number, ...number[], number, number];
declare const t0: [];
declare const t1: [number];
declare const t2: [number, number];
declare const t3: [number, number, number];
declare const t4: [number, number, number, number];

const o1 = second(ns);
const o2 = second(ns1);
const n2 = second(ns2);
const u1 = second(t0);
const u2 = second(t1);
const n3 = second(t2);
const n4 = second(t3);
const n5 = second(t4);

type cases = [
  AssertTrue<IsExact<typeof o1, number | undefined>>,
  AssertTrue<IsExact<typeof o2, number | undefined>>,
  AssertTrue<IsExact<typeof n2, number>>,
  AssertTrue<IsExact<typeof u1, undefined>>,
  AssertTrue<IsExact<typeof u2, undefined>>,
  AssertTrue<IsExact<typeof n3, number>>,
  AssertTrue<IsExact<typeof n4, number>>,
  AssertTrue<IsExact<typeof n5, number>>
];
