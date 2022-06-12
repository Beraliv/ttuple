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

// TODO: replace with ReturnType<typeof sta<T>> for TS@4.7
interface StronglyTypedArray<T extends AnyArray> {
  at<N extends number>(index: N): Get<T, `${N}`>;
  filter<Cb extends AnyPredicate1<T>>(predicate: Cb): StronglyTypedArray<PredicateType<Cb, T>>;
  length<S extends LengthComparison>(condition: S, orThrows: () => Error): StronglyTypedArray<ToTuple<ElementOf<T>, ExtractLength<S>>>;
  map<U>(callback: (value: ElementOf<T>, index: number) => U): StronglyTypedArray<Map<T, U>>;
  toArray(): T;
}

const sta = <T extends AnyArray>(items: T): StronglyTypedArray<T> => ({
  at: <N extends number>(index: N): Get<T, `${N}`> => items[index],
  filter: <Cb extends AnyPredicate1<T>>(predicate: Cb) => sta(items.filter(predicate) as PredicateType<Cb, T>),
  length: <S extends LengthComparison>(condition: S, orThrows: () => Error) => {
    const expectedLength = Number(condition.split(' ')[1]);

    if (items.length >= expectedLength) {
      return sta(items as unknown as ToTuple<ElementOf<T>, ExtractLength<S>>);
    }

    throw orThrows();
  },
  map: <U>(callback: (value: ElementOf<T>, index: number) => U) => sta(items.map(callback) as Map<T, U>),
  toArray: () => items,
});

export default sta;
export type {StronglyTypedArray}
