import { AssertTrue, IsExact } from "conditional-type-checks";
import { at } from "../src";

declare const ns: number[];
declare const ns1: [number, ...number[], number];
declare const ns2: [number, number, ...number[], number, number];
declare const t1: [number];
declare const t2: [number, number];
declare const t3: [number, number, number];
declare const t4: [number, number, number, number];

const first = at(0);
const last = at(-1);

const o1 = first(ns);
const n1 = first(ns1);
const n2 = first(ns2);
const n3 = first(t1);
const n4 = first(t2);
const n5 = first(t3);
const n6 = first(t4);

const o2 = last(ns);
const n7 = last(ns1);
const n8 = last(ns2);
const n9 = last(t1);
const n10 = last(t2);
const n11 = last(t3);
const n12 = last(t4);

type cases = [
  // first
  AssertTrue<IsExact<typeof o1, number | undefined>>,
  AssertTrue<IsExact<typeof n1, number>>,
  AssertTrue<IsExact<typeof n2, number>>,
  AssertTrue<IsExact<typeof n3, number>>,
  AssertTrue<IsExact<typeof n4, number>>,
  AssertTrue<IsExact<typeof n5, number>>,
  AssertTrue<IsExact<typeof n6, number>>,
  // last
  AssertTrue<IsExact<typeof o2, number | undefined>>,
  AssertTrue<IsExact<typeof n7, number>>,
  AssertTrue<IsExact<typeof n8, number>>,
  AssertTrue<IsExact<typeof n9, number>>,
  AssertTrue<IsExact<typeof n10, number>>,
  AssertTrue<IsExact<typeof n11, number>>,
  AssertTrue<IsExact<typeof n12, number>>
];
