import { AnyArray } from "./AnyArray";

type IsEmptyTupleOrArray<T extends AnyArray> = [] extends T ? true : false;

export type { IsEmptyTupleOrArray };
