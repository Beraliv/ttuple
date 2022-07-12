import { AnyArray } from "./AnyArray";
import { IsTuple } from "./IsTuple";

type IsFiniteTuple<T extends AnyArray> = IsTuple<T> extends true
  ? number extends T["length"]
    ? false
    : true
  : false;

export type { IsFiniteTuple };
