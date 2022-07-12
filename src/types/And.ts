type And<T extends boolean, U extends boolean> = [T, U] extends [true, true]
  ? true
  : false;

export type { And };
