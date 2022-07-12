import { AnyArray } from "./AnyArray";
import { ElementOf } from "./ElementOf";
import { ParallelPop } from "./ParallelPop";
import { ParallelShift } from "./ParallelShift";
import { ToTuple } from "./ToTuple";

type At<T extends AnyArray, N extends string> = N extends `-${infer M}`
  ? ParallelPop<[ElementOf<T>, ...T, ElementOf<T>], ToTuple<ElementOf<T>, M>>
  : N extends `${number}`
  ? ParallelShift<T, ToTuple<ElementOf<T>, N>>
  : never;

export type { At };
