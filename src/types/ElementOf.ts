import { AnyArray } from "./AnyArray";

type ElementOf<T extends AnyArray> = T extends (infer V)[] ? V : never;

export type { ElementOf };
