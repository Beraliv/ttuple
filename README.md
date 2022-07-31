# ttuple

[![npm](https://img.shields.io/npm/v/ttuple)](https://npm.im/ttuple)

`Array` wrapper to make methods stricter

It's recommended to enable [noPropertyAccessFromIndexSignature](https://www.typescriptlang.org/tsconfig#noPropertyAccessFromIndexSignature) option to see the difference

## How to use

### Creates tuples

```ts
import { toTuple } from "ttuple";

class Segment {
  public bitrate: number = -1;
}

// ❌ Without ttuple

const arraySegments = [new Segment()];

arraySegments;
// ^? const arraySegments: Segment[]

// ✅ With ttuple

const tupleSegments = toTuple([new Segment()]);

tupleSegments;
// ^? const tupleSegments: [Segment]
```

Playground – https://tsplay.dev/NlE5Om 🏝

### Iterates over array and saves tuple type

```ts
import { map } from "ttuple";

class Segment {
  public bitrate: number = -1;
}

// ❌ Without ttuple

const segments: [Segment] = [new Segment()];

const arrayBitrates = segments.map((segment) => segment.bitrate);

arrayBitrates;
// ^? const arrayBitrates = number[]

// ✅ With ttuple

const tupleBitrates = map((segment) => segment.bitrate, [new Segment()]);

tupleBitrates;
// ^? const tupleBitrates = [number]
```

Playground – https://tsplay.dev/wRG2EN 🏝

### Checks array length and returns array element

TODO – to be fixed for `noUncheckedIndexedAccess`

```ts
import { first, length } from "ttuple";

class Segment {
  public bitrate: number = -1;
}

const segments: Segment[] = [];

// ❌ Without ttuple

if (segments.length < 1) {
  throw new Error("Missing segment element");
}

const arrayFirstSegment = segments[0];

arrayFirstSegment;
// ^? const arrayFirstSegment: Segment | undefined

// ✅ With ttuple

if (!length(segments, ">= 1")) {
  throw new Error("Missing segment element");
}

const tupleFirstSegment = first(segments);

tupleFirstSegment;
// ^? const tupleFirstSegment: Segment
```

Playground – https://tsplay.dev/NV4pxW 🏝

```ts
import { length, last } from "ttuple";

class Segment {
  public bitrate: number = -1;
}

const segments: Segment[] = [];

// ❌ Without ttuple

if (segments.length < 1) {
  throw new Error("Missing segment element");
}

const arrayLastSegment = segments[segments.length - 1];

arrayLastSegment;
// ^? const arrayLastSegment: Segment | undefined

// ✅ With ttuple

if (!length(segments, ">= 1")) {
  throw new Error("Missing segment element");
}

const tupleLastSegment = last(segments);

tupleLastSegment;
// ^? const tupleLastSegment: Segment
```

Playground – https://tsplay.dev/WoaEpN 🏝

## API

```ts
const toTuple: <T extends AnyArray>(array: [...T]) => T;

const at: <N extends number>(
  index: N
) => <T extends AnyArray>(array: [...T]) => At<T, `${N}`>;

const first: <T extends AnyArray>(array: [...T]) => At<T, "0">;
const second: <T extends AnyArray>(array: [...T]) => At<T, "1">;
const secondToLast: <T extends AnyArray>(array: [...T]) => At<T, "-2">;
const last: <T extends AnyArray>(array: [...T]) => At<T, "-1">;

const map: <T extends AnyArray, U>(
  callback: (value: ElementOf<T>, index: number) => U,
  array: [...T]
) => Map<T, U>;

const length: <
  T extends AnyArray,
  S extends `>= ${number}`,
  R extends _ToTuple<ElementOf<T>, ExtractLength<S>, []>
>(
  array: T,
  condition: S
) => array is R extends T ? R : never;
```

### Supported methods

- `length` (with `>=` comparator)
- `map`
- `at`
