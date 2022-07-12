# ttuple

[![npm](https://img.shields.io/npm/v/ttuple)](https://npm.im/ttuple)

`Array` wrapper to make methods stricter

It's recommended to enable [noPropertyAccessFromIndexSignature](https://www.typescriptlang.org/tsconfig#noPropertyAccessFromIndexSignature) option to see the difference

## How to use

1. Creates tuples

```ts
import { toTuple } from "ttuple";

class Segment {
  public bitrate: number = -1;
}

// ❌ Without ttuple

const segments = [new Segment()];

segments;
// ^? const segments: Segment[]

// ✅ With ttuple

const segments = toTuple([new Segment()]);

segments;
// ^? const segments: [Segment]
```

2. Iterates over array and saves tuple type

```ts
import { map } from "ttuple";

class Segment {
  public bitrate: number = -1;
}

// ❌ Without ttuple

const segments: [Segment] = [new Segment()];

const bitrates = segments.map((segment) => segment.bitrate);

bitrates;
// ^? const bitrates = number[]

// ✅ With ttuple

const bitrates = map((segment) => segment.bitrate, [new Segment()]);

bitrates;
// ^? const bitrates = [number]
```

3. Checks array length and returns array element

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

const firstSegment = segments[0];

firstSegment;
// ^? const firstSegment: Segment | undefined

// ✅ With ttuple

if (!length(segments, ">= 1")) {
  throw new Error("Missing segment element");
}

const firstSegment = first(segments);

firstSegment;
// ^? const firstSegment: Segment
```

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

const lastSegment = segments[segments.length - 1];

lastSegment;
// ^? const lastSegment: Segment | undefined

// ✅ With ttuple

if (!length(segments, ">= 1")) {
  throw new Error("Missing segment element");
}

const lastSegment = last(segments);

lastSegment;
// ^? const lastSegment: Segment
```

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
