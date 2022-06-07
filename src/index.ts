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

type Shift<T extends AnyArray> = T extends [any, ...infer Tail] ? Tail : [];

type IsTuple<T> = any[] extends T ? false : true;

type ParallelShift<T extends AnyArray, U extends AnyArray> = [] extends U
  ? IsTuple<T> extends true
    ? T[0]
    : T[0] | undefined
  : ParallelShift<Shift<T>, Shift<U>>;

type Get<T extends AnyArray, N extends number> = ParallelShift<
  T,
  ToTuple<ElementOf<T>, `${N}`>
>;

type Combine<T, U> = T extends undefined
  ? U extends undefined
    ? T | U
    : Exclude<T, undefined> | U
  : U extends undefined
  ? T | Exclude<U, undefined>
  : T | U;

class StronglyTypedArray<T extends AnyArray> {
  #items: T;

  constructor(items: T) {
    this.#items = items;
  }

  /**
   * Checks if array has at least N elements
   * If so, executes `then` function with strictly typed array
   * Otherwise, executes `else` with originally typed array. You can also throw an error here.
   *
   * @example
   *
   * const numbers: number[];
   * const firstValue = staNumbers.length > 0 ? staNumbers[0] : defaultNumber;
   *
   * // is equal to
   * const staNumbers: StronglyTypedArray<number[]>;
   * const firstValue = staNumbers.hasAtLeast(0, (numbers) => numbers.at(0), defaultNumber);
   */
  hasAtLeast<N extends number, ThenReturnType, ElseReturnType>(
    length: N,
    thenFunction: (
      value: StronglyTypedArray<ToTuple<ElementOf<T>, `${N}`>>
    ) => ThenReturnType,
    elseFunctionOrDefaultValue: (value: StronglyTypedArray<T>) => ElseReturnType
  ): Combine<ThenReturnType, ElseReturnType> {
    let result: ThenReturnType | ElseReturnType;
    if (this.#items.length >= length) {
      result = thenFunction(
        this as unknown as StronglyTypedArray<ToTuple<ElementOf<T>, `${N}`>>
      );
    } else {
      result = elseFunctionOrDefaultValue(this);
    }
    return result as Combine<ThenReturnType, ElseReturnType>;
  }

  // TODO: add negative index support
  at<N extends number>(index: N): Get<T, N> {
    return this.#items[index];
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
