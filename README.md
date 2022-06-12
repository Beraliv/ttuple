# strongly-typed-array

[![npm](https://img.shields.io/npm/v/strongly-typed-array)](https://npm.im/strongly-typed-array)

`Array` wrapper to make methods stricter

## How to use

```ts
import StronglyTypedArray from 'strict-typed-array';

class Segment {
  public bitrate: number = -1;
}

const segments: [Segment, ...Segment[]] = [new Segment()];

// ❌ Without strict-typed-array

const bitrates = segments.map(segment => segment.bitrate);
//    ^? const bitrates = number[]

// ✅ With strict-typed-array

const bitrates = new StronglyTypedArray(segments).map((segment) => segment.bitrate).toArray();
//    ^? const bitrates = [number, ...number[]]
```
