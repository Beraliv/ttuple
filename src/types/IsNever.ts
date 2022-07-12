type IsNever<T> = [T] extends [never] ? true : false;

export type { IsNever };
