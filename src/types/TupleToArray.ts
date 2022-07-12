import { AnyArray } from "./AnyArray";
import { ElementOf } from "./ElementOf";

type TupleToArray<T extends AnyArray> = ElementOf<T>[];

export type { TupleToArray };
