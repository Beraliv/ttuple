import { AssertTrue, IsExact } from "conditional-type-checks";
import { At } from "../../src/types/At";

type RA = readonly string[];
type A = string[];
type SAS = [string, ...A, string];
type SSASS = [string, ...SAS, string];
type T0 = [];
type T1 = [string];
type T2 = [string, ...T1];
type T3 = [string, ...T2];

type cases = [
  // 2
  AssertTrue<IsExact<At<RA, "2">, string | undefined>>,
  AssertTrue<IsExact<At<A, "2">, string | undefined>>,
  AssertTrue<IsExact<At<SAS, "2">, string | undefined>>,
  AssertTrue<IsExact<At<SSASS, "2">, string | undefined>>,
  AssertTrue<IsExact<At<T0, "2">, undefined>>,
  AssertTrue<IsExact<At<T1, "2">, undefined>>,
  AssertTrue<IsExact<At<T2, "2">, undefined>>,
  AssertTrue<IsExact<At<T3, "2">, string>>,
  // 1
  AssertTrue<IsExact<At<RA, "1">, string | undefined>>,
  AssertTrue<IsExact<At<A, "1">, string | undefined>>,
  AssertTrue<IsExact<At<SAS, "1">, string | undefined>>,
  AssertTrue<IsExact<At<SSASS, "1">, string>>,
  AssertTrue<IsExact<At<T0, "1">, undefined>>,
  AssertTrue<IsExact<At<T1, "1">, undefined>>,
  AssertTrue<IsExact<At<T2, "1">, string>>,
  AssertTrue<IsExact<At<T3, "1">, string>>,
  // 0
  AssertTrue<IsExact<At<RA, "0">, string | undefined>>,
  AssertTrue<IsExact<At<A, "0">, string | undefined>>,
  AssertTrue<IsExact<At<SAS, "0">, string>>,
  AssertTrue<IsExact<At<SSASS, "0">, string>>,
  AssertTrue<IsExact<At<T0, "0">, undefined>>,
  AssertTrue<IsExact<At<T1, "0">, string>>,
  AssertTrue<IsExact<At<T2, "0">, string>>,
  AssertTrue<IsExact<At<T3, "0">, string>>,
  // -1
  AssertTrue<IsExact<At<RA, "-1">, string | undefined>>,
  AssertTrue<IsExact<At<A, "-1">, string | undefined>>,
  AssertTrue<IsExact<At<SAS, "-1">, string>>,
  AssertTrue<IsExact<At<SSASS, "-1">, string>>,
  AssertTrue<IsExact<At<T0, "-1">, undefined>>,
  AssertTrue<IsExact<At<T1, "-1">, string>>,
  AssertTrue<IsExact<At<T2, "-1">, string>>,
  AssertTrue<IsExact<At<T3, "-1">, string>>,
  // -2
  AssertTrue<IsExact<At<RA, "-2">, string | undefined>>,
  AssertTrue<IsExact<At<A, "-2">, string | undefined>>,
  AssertTrue<IsExact<At<SAS, "-2">, string | undefined>>,
  AssertTrue<IsExact<At<SSASS, "-2">, string>>,
  AssertTrue<IsExact<At<T0, "-2">, undefined>>,
  AssertTrue<IsExact<At<T1, "-2">, undefined>>,
  AssertTrue<IsExact<At<T2, "-2">, string>>,
  AssertTrue<IsExact<At<T3, "-2">, string>>
];
