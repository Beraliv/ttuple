import { ToTuple } from "./types/ToTuple";
import { Map } from "./types/Map";
import { At } from "./types/At";
import { ElementOf } from "./types/ElementOf";
import { AnyArray } from "./types/AnyArray";

type LengthComparison = `>= ${number}`;

type ExtractLength<S extends LengthComparison> = S extends `>= ${infer N}`
  ? `${N}`
  : `${number}`;

const toTuple = <T extends AnyArray>(array: [...T]): T => array;

const at =
  <N extends number>(index: N) =>
  <T extends AnyArray>(array: [...T]) =>
    array.at(index) as At<T, `${N}`>;

const first = at(0);
const second = at(1);
const secondToLast = at(-2);
const last = at(-1);

class StronglyTypedArray<T extends AnyArray> {
  #items: T;

  constructor(items: T) {
    this.#items = items;
  }

  length<S extends LengthComparison>(
    condition: S,
    orThrows: () => Error
  ): StronglyTypedArray<ToTuple<ElementOf<T>, ExtractLength<S>>> {
    const expectedLength = Number(condition.split(" ")[1]);

    if (this.#items.length >= expectedLength) {
      return this as unknown as StronglyTypedArray<
        ToTuple<ElementOf<T>, ExtractLength<S>>
      >;
    }

    throw orThrows();
  }

  at<N extends number, S extends string = `${N}`>(index: N): At<T, S> {
    return this.#items[index];
  }

  map<U>(
    callback: (value: ElementOf<T>, index: number) => U
  ): StronglyTypedArray<Map<T, U>> {
    // @ts-expect-error: T => U
    this.#items = this.#items.map(callback);
    // @ts-expect-error: StronglyTypedArray<T> => StronglyTypedArray<U>
    return this;
  }

  toArray(): T {
    return this.#items;
  }
}

export const sta = <T extends AnyArray>(
  items: [...T]
): StronglyTypedArray<[...T]> => new StronglyTypedArray(items);

export default sta;
export { StronglyTypedArray, at, toTuple, first, second, secondToLast, last };
