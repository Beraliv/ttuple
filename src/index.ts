import { ToTuple } from "./types/ToTuple";
import { ElementOf } from "./types/ElementOf";
import { AnyArray } from "./types/AnyArray";

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

export { length };
