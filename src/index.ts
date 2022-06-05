class StronglyTypedArray<T> {
  #items: T[];

  constructor(items: T[]) {
    this.#items = items;
  }

  map<U>(
    callback: (value: T, index: number, array: T[]) => U
  ): StronglyTypedArray<U> {
    // @ts-expect-error: T[] => U[]
    this.#items = this.#items.map(callback);
    // @ts-expect-error: StronglyTypedArray<T> => StronglyTypedArray<U>
    return this;
  }
}

[].map;

export default StronglyTypedArray;
