export const popSet = <T>(set: Set<T>): T | undefined => {
  const iterator = set.values();
  const first = iterator.next().value;
  if (first !== undefined) {
    set.delete(first);
  }
  return first;
};
