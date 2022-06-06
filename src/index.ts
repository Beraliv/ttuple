type AnyArray = readonly any[];
type Values<T extends AnyArray> = T[number];

type Map<T, U> = any[] extends T
  ? U[]
  : T extends [any, ...infer Tail]
  ? [U, ...Map<Tail, U>]
  : [];

type ElementOf<T extends AnyArray> = T extends (infer V)[] ? V : never;

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

type Multiply10<T extends readonly any[]> = [
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

type Add<N1 extends readonly any[], N2 extends readonly any[]> = [...N1, ...N2];

type ToTuple<
  V,
  S extends string,
  T extends readonly any[] = []
> = S extends `${infer D}${infer Rest}`
  ? ToTuple<
      V,
      Rest,
      Add<Multiply10<T>, DigitMapping<V>[D & keyof DigitMapping<V>]>
    >
  : [...T, ...V[]];

class StronglyTypedArray<T extends AnyArray> {
  #items: T;

  constructor(items: T) {
    this.#items = items;
  }

  hasAtLeast<N extends number>(
    length: N
  ): this is StronglyTypedArray<ToTuple<ElementOf<T>, `${N}`>> {
    return this.#items.length >= length;
  }

  map<U>(callback: (value: Values<T>) => U): StronglyTypedArray<Map<T, U>> {
    // @ts-expect-error: T[] => U[]
    this.#items = this.#items.map(callback);
    // @ts-expect-error: StronglyTypedArray<T> => StronglyTypedArray<U>
    return this;
  }

  toArray(): T {
    return this.#items;
  }
}

export default StronglyTypedArray;
