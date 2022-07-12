import { AnyArray } from "./AnyArray";
import { TupleToArray } from "./TupleToArray";
import { IsArray } from "./IsArray";
import { IsNever } from "./IsNever";
import { ElementOf } from "./ElementOf";
import { IsFiniteTuple } from "./IsFiniteTuple";

type TupleShift<T extends AnyArray> = T extends [any, ...infer Tail, any]
  ? Tail
  : TupleToArray<T>;

type Shift<T extends AnyArray> = T extends [any, ...infer Tail]
  ? Tail
  : TupleToArray<T>;

type ParallelShift<
  T extends AnyArray,
  U extends AnyArray
> = IsArray<U> extends true
  ? IsNever<ElementOf<T>> extends true
    ? undefined
    : IsArray<T> extends true
    ? T[0] | undefined
    : T[0]
  : IsFiniteTuple<T> extends true
  ? ParallelShift<Shift<T>, TupleShift<U>>
  : ParallelShift<TupleShift<T>, TupleShift<U>>;

export type { ParallelShift };
