type Map<T, U> = any[] extends T
  ? U[]
  : T extends readonly [any, ...infer Tail]
  ? [U, ...Map<Tail, U>]
  : [];

export type { Map };
