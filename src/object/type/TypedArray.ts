
export type TypedArray = Int8Array |
  Uint8Array |
  Uint8ClampedArray |
  Int16Array |
  Uint16Array |
  Int32Array |
  Uint32Array |
  Float32Array |
  Float64Array |
  BigInt64Array |
  BigUint64Array;
export function isTypedArray(val: unknown): val is TypedArray {
  return ArrayBuffer.isView(val) && !(val instanceof DataView);
}
