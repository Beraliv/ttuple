import { AnyArray } from "./AnyArray";
import { IsTuple } from "./IsTuple";
import { TupleToArray } from "./TupleToArray";

type Shift<T extends AnyArray> = T extends [any, ...infer Tail]
  ? Tail
  : TupleToArray<T>;

type ParallelShift<T extends AnyArray, U extends AnyArray> = [] extends U
  ? IsTuple<T> extends true
    ? T[0]
    : T[0] | undefined
  : ParallelShift<Shift<T>, Shift<U>>;

export type { ParallelShift };
