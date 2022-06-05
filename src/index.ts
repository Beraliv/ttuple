type AnyArray = readonly any[];
type Values<T extends AnyArray> = T[number];

type Map<T, U> = any[] extends T
  ? U[]
  : T extends [any, ...infer Tail]
  ? [U, ...Map<Tail, U>]
  : [];

class StronglyTypedArray<T extends AnyArray> {
  #items: T;

  constructor(items: T) {
    this.#items = items;
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
