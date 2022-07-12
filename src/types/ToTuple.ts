import { AnyArray } from "./AnyArray";

type DigitMapping<T> = {
  "0": [];
  "1": [T];
  "2": [T, T];
  "3": [T, T, T];
  "4": [T, T, T, T];
  "5": [T, T, T, T, T];
  "6": [T, T, T, T, T, T];
  "7": [T, T, T, T, T, T, T];
  "8": [T, T, T, T, T, T, T, T];
  "9": [T, T, T, T, T, T, T, T, T];
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
  V,
  S extends string,
  T extends AnyArray = []
> = S extends `${infer D}${infer Rest}`
  ? _ToTuple<
      V,
      Rest,
      Add<Multiply10<T>, DigitMapping<V>[D & keyof DigitMapping<V>]>
    >
  : [...T, ...V[], ...T];

type ToTuple<V, S extends string> = _ToTuple<V, S>;

export type { ToTuple };
