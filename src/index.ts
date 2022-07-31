import { ToTuple } from "./types/ToTuple";
import { Map } from "./types/Map";
import { At } from "./types/At";
import { ElementOf } from "./types/ElementOf";
import { AnyArray } from "./types/AnyArray";

const toTuple = <T extends AnyArray>(array: [...T]): T => array;

const at =
  <N extends number>(index: N) =>
  <T extends AnyArray>(array: [...T]) =>
    array.at(index) as At<T, `${N}`>;

const first = at(0);
const second = at(1);
const secondToLast = at(-2);
const last = at(-1);

const map = <T extends AnyArray, U>(
  callback: (value: ElementOf<T>, index: number) => U,
  array: [...T]
) => array.map(callback) as Map<T, U>;

const length = <
  T extends AnyArray,
  S extends `${number}`,
  R = ToTuple<ElementOf<T>, S>
>(
  array: T,
  condition: `>= ${S}`
): array is R extends T ? R : never => {
  const expectedLength = Number(condition.split(" ")[1]);

  if (array.length >= expectedLength) {
    return true;
  }

  return false;
};

export { at, first, last, length, map, second, secondToLast, toTuple };
