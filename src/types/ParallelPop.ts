import { AnyArray } from "./AnyArray";
import { IsEmptyTupleOrArray } from "./IsEmptyTupleOrArray";
import { IsTuple } from "./IsTuple";
import { TupleToArray } from "./TupleToArray";

type Pop<T extends AnyArray> = T extends [...infer Head, any]
  ? Head
  : TupleToArray<T>;

type ParallelPop<
  T extends AnyArray,
  U extends AnyArray
> = IsEmptyTupleOrArray<U> extends true
  ? IsTuple<T> extends true
    ? T[0]
    : T[0] | undefined
  : ParallelPop<Pop<T>, Pop<U>>;

export type { ParallelPop };
