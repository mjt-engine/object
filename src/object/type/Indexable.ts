export type Indexable<T = unknown> = Array<T> | ArrayBufferView;

export const isIndexable = <T>(
  val: unknown
): val is Array<T> | ArrayBufferView => {
  return Array.isArray(val) || ArrayBuffer.isView(val);
};
