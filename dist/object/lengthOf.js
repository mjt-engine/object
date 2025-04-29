import { isDefined } from "./isDefined";
import { isTypedArray } from "./type/TypedArray";
export const lengthOf = (value) => {
    if (Array.isArray(value) || isTypedArray(value)) {
        return value.length;
    }
    return isDefined(value) ? 1 : 0;
};
//# sourceMappingURL=lengthOf.js.map