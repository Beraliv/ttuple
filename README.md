# strongly-typed-array

[![npm](https://img.shields.io/npm/v/strongly-typed-array)](https://npm.im/strongly-typed-array)

`Array` wrapper to make methods stricter

It's recommended to enable [noPropertyAccessFromIndexSignature](https://www.typescriptlang.org/tsconfig#noPropertyAccessFromIndexSignature) option to see the difference

## How to use

1. Iterates over array and saves tuple type

```ts
import sta from 'strict-typed-array';

class Segment {
  public bitrate: number = -1;
}

const segments: [Segment, ...Segment[]] = [new Segment()];

// ❌ Without strict-typed-array

const bitrates = segments.map(segment => segment.bitrate);

bitrates
// ^? const bitrates = number[]

// ✅ With strict-typed-array

const bitrates = sta(segments)
    .map((segment) => segment.bitrate)
    .toArray();

bitrates
// ^? const bitrates = [number, ...number[]]
```

2. Checks array length and returns array element

```ts
import sta from 'strict-typed-array';

class Segment {
  public bitrate: number = -1;
}

const segments: Segment[] = [];

// ❌ Without strict-typed-array

if (segments.length < 1) {
    throw new Error('Missing segment element');
}

const firstSegment = segments[0];

firstSegment
// ^? const firstSegment: Segment | undefined

// ✅ With strict-typed-array

const firstSegment = sta(segments)
    .length('>= 1', () => new Error('Missing segment element'))
    .at(0);

firstSegment
// ^? const firstSegment: Segment
```

```ts
import sta from 'strict-typed-array';

class Segment {
  public bitrate: number = -1;
}

const segments: Segment[] = [];

// ❌ Without strict-typed-array

if (segments.length < 1) {
    throw new Error('Missing segment element');
}

const lastSegment = segments[segments.length - 1];

lastSegment
// ^? const lastSegment: Segment | undefined

// ✅ With strict-typed-array

const lastSegment = sta(segments)
    .length('>= 1', () => new Error('Missing segment element'))
    .at(-1);

lastSegment
// ^? const lastSegment: Segment
```

## API

```ts
// `sta` is short for strongly typed array
export const sta = <T extends AnyArray>(
  items: T
): StronglyTypedArray<T> => new StronglyTypedArray(items);
```

### Supported methods

* `length` (with `>=` comparator)
* `map`
