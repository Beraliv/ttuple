type AnyArray = readonly any[];

type Map<T, U> = any[] extends T
  ? U[]
  : T extends [any, ...infer Tail]
  ? [U, ...Map<Tail, U>]
  : [];

type ElementOf<T extends AnyArray> = T extends (infer V)[] ? V : never;

type DigitMapping<T> = {
  "0": [];
  "1": [T];
  "2": [T, T];
  "3": [T, T, T];
  "4": [T, T, T, T];
  "5": [T, T, T, T, T];
  "6": [T, T, T, T, T, T];
  "7": [T, T, T, T, T, T, T];
  "8": [T, T, T, T, T, T, T, T];
  "9": [T, T, T, T, T, T, T, T, T];
};

type Multiply10<T extends AnyArray> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T
];

type Add<N1 extends AnyArray, N2 extends AnyArray> = [...N1, ...N2];

type ToTuple<
  V,
  S extends string,
  T extends AnyArray = []
> = S extends `${infer D}${infer Rest}`
  ? ToTuple<
      V,
      Rest,
      Add<Multiply10<T>, DigitMapping<V>[D & keyof DigitMapping<V>]>
    >
  : [...T, ...V[], ...T];

type Shift<T extends AnyArray> = T extends [any, ...infer Tail] ? Tail : TupleToArray<T>;

type IsTuple<T> = any[] extends T ? false : true;

type ParallelShift<T extends AnyArray, U extends AnyArray> = [] extends U
  ? IsTuple<T> extends true
    ? T[0]
    : T[0] | undefined
  : ParallelShift<Shift<T>, Shift<U>>;

type Pop<T extends AnyArray> = T extends [...infer Head, any] ? Head : TupleToArray<T>;

type ParallelPop<T extends AnyArray, U extends AnyArray> = [] extends U
  ? IsTuple<T> extends true
    ? T[0]
    : T[0] | undefined
  : ParallelPop<Pop<T>, Pop<U>>;

type Get<T extends AnyArray, N extends string> = N extends `-${infer M}`
  ? ParallelPop<[ElementOf<T>, ...T, ElementOf<T>], ToTuple<ElementOf<T>, M>>
  : N extends `${number}`
    ? ParallelShift<T, ToTuple<ElementOf<T>, N>>
    : never;

type AnyPredicate1<T extends AnyArray, U extends boolean = boolean> = (
  value: ElementOf<T>,
  index: number
) => U;

type TupleToArray<T extends AnyArray> = ElementOf<T>[];

type PredicateType<
  Cb extends AnyPredicate1<T>,
  T extends AnyArray
> = Cb extends (value: any, ...args: any[]) => value is infer P
  ? [P] extends [ElementOf<T>]
    ? P[]
    : TupleToArray<T>
  : Cb extends (value: any) => boolean
  ? TupleToArray<T>
  : never;

type LengthComparison = `>= ${number}`;

type ExtractLength<S extends LengthComparison> = S extends `>= ${infer N}` ? `${N}` : `${number}`;

class StronglyTypedArray<T extends AnyArray> {
  #items: T;

  constructor(items: T) {
    this.#items = items;
  }

  length<S extends LengthComparison>(condition: S, orThrows: () => Error): StronglyTypedArray<ToTuple<ElementOf<T>, ExtractLength<S>>> {
    const expectedLength = Number(condition.split(' ')[1]);
    
    if (this.#items.length >= expectedLength) {
      return this as unknown as StronglyTypedArray<ToTuple<ElementOf<T>, ExtractLength<S>>>
    }

    throw orThrows();
  }

  at<N extends number, S extends string = `${N}`>(index: N): Get<T, S> {
    return this.#items[index];
  }

  map<U>(
    callback: (value: ElementOf<T>, index: number) => U
  ): StronglyTypedArray<Map<T, U>> {
    // @ts-expect-error: T => U
    this.#items = this.#items.map(callback);
    // @ts-expect-error: StronglyTypedArray<T> => StronglyTypedArray<U>
    return this;
  }

  filter<Cb extends AnyPredicate1<T>>(
    callback: Cb
  ): StronglyTypedArray<PredicateType<Cb, T>> {
    // @ts-expect-error: T => U
    this.#items = this.#items.filter(callback);
    // @ts-expect-error: StronglyTypedArray<T> => StronglyTypedArray<U>
    return this;
  }

  toArray(): T {
    return this.#items;
  }
}

export default StronglyTypedArray;
