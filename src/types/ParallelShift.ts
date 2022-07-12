import { AnyArray } from "./AnyArray";
import { IsTuple } from "./IsTuple";
import { TupleToArray } from "./TupleToArray";
import { IsArray } from "./IsArray";
import { IsNever } from "./IsNever";
import { ElementOf } from "./ElementOf";

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
    : IsTuple<T> extends true
    ? T[0]
    : T[0] | undefined
  : ParallelShift<Shift<T>, TupleShift<U>>;

export type { ParallelShift };
