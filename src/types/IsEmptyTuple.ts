import { AnyArray } from "./AnyArray";

type IsEmptyTuple<T extends AnyArray> = T extends [] ? true : false;

export type { IsEmptyTuple };
