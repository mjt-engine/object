export function isTypedArray(val) {
    return ArrayBuffer.isView(val) && !(val instanceof DataView);
}
//# sourceMappingURL=TypedArray.js.map