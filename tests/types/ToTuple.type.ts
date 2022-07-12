import { AssertTrue, IsExact } from "conditional-type-checks";
import { ToTuple } from "../../src/types/ToTuple";

type T0 = string[];
type T1 = [string, ...T0, string];
type T2 = [string, ...T1, string];
type T3 = [string, ...T2, string];
type T4 = [string, ...T3, string];
type T5 = [string, ...T4, string];
type T6 = [string, ...T5, string];
type T7 = [string, ...T6, string];
type T8 = [string, ...T7, string];
type T9 = [string, ...T8, string];
type T10 = [string, ...T9, string];

type cases = [
  AssertTrue<IsExact<ToTuple<string, "0">, T0>>,
  AssertTrue<IsExact<ToTuple<string, "1">, T1>>,
  AssertTrue<IsExact<ToTuple<string, "2">, T2>>,
  AssertTrue<IsExact<ToTuple<string, "3">, T3>>,
  AssertTrue<IsExact<ToTuple<string, "4">, T4>>,
  AssertTrue<IsExact<ToTuple<string, "5">, T5>>,
  AssertTrue<IsExact<ToTuple<string, "6">, T6>>,
  AssertTrue<IsExact<ToTuple<string, "7">, T7>>,
  AssertTrue<IsExact<ToTuple<string, "8">, T8>>,
  AssertTrue<IsExact<ToTuple<string, "9">, T9>>,
  AssertTrue<IsExact<ToTuple<string, "10">, T10>>
];
