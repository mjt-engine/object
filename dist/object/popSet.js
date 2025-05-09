export const popSet = (set) => {
    const iterator = set.values();
    const first = iterator.next().value;
    if (first !== undefined) {
        set.delete(first);
    }
    return first;
};
//# sourceMappingURL=popSet.js.map