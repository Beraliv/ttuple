import { AnyArray } from "./AnyArray";

type IsArray<T extends AnyArray> = any[] extends T ? true : false;

export type { IsArray };
