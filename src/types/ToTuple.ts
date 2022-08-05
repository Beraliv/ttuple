import { AnyArray } from "./AnyArray";

type DigitMapping = {
  "0": [];
  "1": [0];
  "2": [0, 0];
  "3": [0, 0, 0];
  "4": [0, 0, 0, 0];
  "5": [0, 0, 0, 0, 0];
  "6": [0, 0, 0, 0, 0, 0];
  "7": [0, 0, 0, 0, 0, 0, 0];
  "8": [0, 0, 0, 0, 0, 0, 0, 0];
  "9": [0, 0, 0, 0, 0, 0, 0, 0, 0];
  [key: string]: 0[];
};

type Multiply10<T extends AnyArray> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T
];

type Add<N1 extends AnyArray, N2 extends AnyArray> = [...N1, ...N2];

type _ToTuple<
  S extends string,
  T extends AnyArray
> = S extends `${infer D}${infer Rest}`
  ? _ToTuple<Rest, Add<Multiply10<T>, DigitMapping[D]>>
  : T;

type ToTuple<S extends string> = _ToTuple<S, []>;

export type { ToTuple };
