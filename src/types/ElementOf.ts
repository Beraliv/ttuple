import { AnyArray } from "./AnyArray";

type ElementOf<T extends AnyArray> = T extends readonly (infer V)[] ? V : never;

export type { ElementOf };
