import { ToTuple } from "./types/ToTuple";
import { AnyArray } from "./types/AnyArray";

const length = <S extends `${number}`, R = ToTuple<S>>(
  array: AnyArray,
  condition: `>= ${S}`
): array is R extends AnyArray ? R : never => true;

export { length };
