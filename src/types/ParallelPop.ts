import { AnyArray } from "./AnyArray";
import { IsTuple } from "./IsTuple";
import { TupleToArray } from "./TupleToArray";

type Pop<T extends AnyArray> = T extends [...infer Head, any]
  ? Head
  : TupleToArray<T>;

type ParallelPop<T extends AnyArray, U extends AnyArray> = [] extends U
  ? IsTuple<T> extends true
    ? T[0]
    : T[0] | undefined
  : ParallelPop<Pop<T>, Pop<U>>;

export type { ParallelPop };
