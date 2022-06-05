class StronglyTypedArray<T> {
  #items: T[];

  constructor(items: T[]) {
    this.#items = items;
  }
}

export default StronglyTypedArray;
