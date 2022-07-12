import { AnyArray } from "./AnyArray";
import { IsEmptyTupleOrArray } from "./IsEmptyTupleOrArray";
import { IsTuple } from "./IsTuple";
import { TupleToArray } from "./TupleToArray";

type Shift<T extends AnyArray> = T extends [any, ...infer Tail]
  ? Tail
  : TupleToArray<T>;

type ParallelShift<
  T extends AnyArray,
  U extends AnyArray
> = IsEmptyTupleOrArray<U> extends true
  ? IsTuple<T> extends true
    ? T[0]
    : T[0] | undefined
  : ParallelShift<Shift<T>, Shift<U>>;

export type { ParallelShift };
